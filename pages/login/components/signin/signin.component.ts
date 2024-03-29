import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../../services/user.service';

interface loginResponse {
  validation: boolean;
  email: string;
  senha: string;
}

@Component({
  selector: 'app-signin',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss',
})
export class SigninComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private routerNavigate: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [
        'devoltapropassado@gmail.com',
        [Validators.email, Validators.required],
      ],

      senha: ['12345678', Validators.required],
    });
  }

  enviarLogin() {
    this.http
      .post('http://localhost:3000/authentication', {
        dados: this.loginForm.value,
      })
      .subscribe({
        next: (res: any) => {
          sessionStorage.setItem("id_cliente",res.id_cliente.toString())

         // localStorage.setItem("id_cliente",res.id_cliente.toString())
          //this.enviarDadosUser(res); //envia a res para o service !
          // this.userService.usuario.next(res) //envia a res para o service !
       
          this.routerNavigate.navigateByUrl('/pages');
          // setTimeout(function() {
          //   location.reload();
          // }, 40);
        
        },
        error: (err: any) => {
          console.log('erro');
        },
      });
  }

 
}

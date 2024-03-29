import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

interface usuario {
  nome_cliente: string;
  saldo_cliente: string;
  id_cliente:number;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {
    
    this.usuario.subscribe((value) => console.log({ value }));
  }
 
  
  public usuario: BehaviorSubject<usuario> = new BehaviorSubject<usuario>({
    saldo_cliente:'',
    nome_cliente: '',
    id_cliente: 0,
 
  });

  

}

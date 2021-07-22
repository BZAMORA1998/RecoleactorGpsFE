import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private _router:Router,) { }

  ngOnInit(): void {
  }

  homeRouter(){
    this._router.navigate(['../home']);
  }

  typeInputF="password";
  showPF:boolean=true;
   mostrarPassword(){
     if(this.typeInputF=="text"){
       this.showPF=true;
       this.typeInputF="password";
     }else{
       this.showPF=false;
       this.typeInputF="text";
     }
   }

}

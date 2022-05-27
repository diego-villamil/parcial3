import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario1',
  templateUrl: './formulario1.component.html',
  styleUrls: ['./formulario1.component.css']
})
export class Formulario1Component implements OnInit {
  lstuser: any = [];
 newlstUser: any = [];


  user_info: any = {
    nombre:'',  email:'',
  }

  constructor() { }

  ngOnInit(): void {
    this.newlstUser = JSON.parse(localStorage.getItem('$key') || '{}');
  }

  doDelete(index: number){
   
    console.log(index)
    this.lstuser.splice(index,1);
    localStorage.setItem('$key', JSON.stringify(this.lstuser));
    alert("eliminado correctamente")

  } 
  
  addTask(){
  if (this.user_info) {
    this.lstuser.push(this.user_info); 
    localStorage.setItem('$key', JSON.stringify(this.lstuser));
    console.log(this.lstuser);
    this.user_info = {};
  } 
  }

  edit(item: any){
    this.user_info = item;    
   }
   
   editar(){
    this.user_info = this.newlstUser; 
  }
 

  
}


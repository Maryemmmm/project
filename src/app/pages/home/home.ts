import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
// atrribut :

title: string;
state: boolean;



// constructor


constructor(){
  this.title='home 4DAS I10';
  this.state=true;
} 


// methods


ng0nInit(){

} 
change(){
  this.title='home 4DAS i9';
  this.state=false;
}
}
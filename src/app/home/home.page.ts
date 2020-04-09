import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  numberA;
  numberB;
  constructor(public navCtrl: NavController) {

  }
addBtn(){
  console.log("add") 
  var a = parseInt(this.numberA);
  var b = parseInt(this.numberB);
  alert(a+b);

}
subBtn(){
  console.log("sub")
  var a = parseInt(this.numberA);
  var b = parseInt(this.numberB);
  alert(a-b);
 } 
}

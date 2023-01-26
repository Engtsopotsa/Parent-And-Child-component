import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title = 'sharing-data-between-components';
  currentBeverage = "coffee";
  beverages= ['milk','tea','coffee','juice'];

  addBeverage(newBeverage:string) {
    this.beverages.push(newBeverage);
    this.clearInput();
  }

  clearInput(){
    let input =<HTMLInputElement>document.getElementById('beverage-input');
    input.value='';
  }

}

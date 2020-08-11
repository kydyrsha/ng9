import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Dynamic title'
  number = 42
  arr = [1,2,3]
  obj = {a:1, b:2, c:3}
  img = 'https://w7.pngwing.com/pngs/595/279/png-transparent-vue-js-javascript-library-angularjs-react-vue-js-template-angle-text-thumbnail.png'

  constructor () {
    setTimeout(() => {
      console.log('Timeout')
      this.img = 'https://www.stimulsoft.com/images/products/reports-angular/logo.svg'
    },5000)
  }

}

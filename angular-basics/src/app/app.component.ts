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

  inputValue = ''


  constructor () {

  }

  onInput(event: KeyboardEvent) {
    console.log('Event', event)
    this.inputValue = (<HTMLInputElement>event.target).value
  }

  onClick() {
    console.log('Click!')
  }

  onBlur(str: string) {
    this.inputValue = str
  }

}

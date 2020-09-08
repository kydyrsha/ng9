import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arr = [1, 1, 2, 3, 5, 8, 13]

  objs = [
    {title: 'Post 1', author: 'Sanat', comments: [
      {name:'Kan', text: 'lorem 1'},
      {name:'Kan', text: 'lorem 1'},
      {name:'Kan', text: 'lorem 1'}
    ]},
    {title: 'Post 2', author: 'SanatV2', comments: [
      {name:'KanV2', text: 'lorem 2'},
      {name:'KanV2', text: 'lorem 2'},
      {name:'KanV2', text: 'lorem 2'}
    ]}
  ]
}

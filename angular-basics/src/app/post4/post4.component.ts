import {Component} from '@angular/core';

@Component ({
  selector:'app-post4',
  template: `
    <div class="post4">
      <h2>Ratata eto title N2</h2>
      <p>Lorem Lorem Lorem Lorem</p>
    </div>
  `,
  styles: [`
      .post4 {
        padding:2rem;
        border: 2px solid black;
      },
      p {
        color:#000000;
      }
    `]
})
export class Post4Component {

}

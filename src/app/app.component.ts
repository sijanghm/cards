import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  posts=[
    {
      title : 'Neat Trees',
      imageUrl: 'assets/img/tree.jpeg',
      username : 'sijan',
      content: 'Saw a tree during my hike'
    },
    {
      title : 'Snowy Mountain',
      imageUrl: 'assets/img/mountain.jpeg',
      username : 'hi',
      content: 'Saw a snowy mountain during my hike'
    },
    {
      title : 'Mountain Bike',
      imageUrl: 'assets/img/biking.jpeg',
      username : 'cycle_lover',
      content: 'Had Awesome exprience with biking'
    }
  ]
}

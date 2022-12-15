import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';
  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  takeOffEnabled: boolean = true;
 
  handleTakeOff(rocketImage) {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
      rocketImage.style.bottom = '100px';
       this.color = 'blue';
       this.height = 10000;
       this.width = 0;
       this.message = 'Shuttle in flight.';
       this.takeOffEnabled = false;
    }
  }
  handleLand(rocketImage) {
    let result = window.confirm('Are you sure you want to land?');
    if(result) {
      alert("okaaay, landingggg");
      rocketImage.style.bottom = '0px';
      this.color = 'green';
      this.height = 0;
      this.width = 0;
      this.message = "The shuttle has landed."
      this.takeOffEnabled = true;
    }
  }

  handleAbort(rocketImage) {
    let result = window.confirm("Are you sure you wan to abort this mission?")
    if (result) {
      alert("okaaay, abortion NOW");
      rocketImage.style.bottom = '0px';
      this.color = 'green';
      this.height = 0;
      this.width = 0;
      this.message = "Mission aborted"
      this.takeOffEnabled = true;
    }
  }

  gutterCheck(width, height) {
    if (this.width > 370000 || this.width < -10000 || this.height < -90000 || this.height >= 240000) {
      this.color = 'red';
    } else {
      this.color = 'blue';
    }
  }

  moveRocket(rocketImage, direction) {
    if (direction === 'right') {
       let movement = parseInt(rocketImage.style.left) + 10 + 'px';
       rocketImage.style.left = movement;
       this.width = this.width + 10000;
    }
    if (direction === 'left') {
      let movement = parseInt(rocketImage.style.left) - 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width - 10000;
    }
    if (direction === 'up') {
      let movement = parseInt(rocketImage.style.bottom) + 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height += 10000;
      
    }
    if (direction === 'down') {
      let movement = parseInt(rocketImage.style.bottom) - 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height -= 10000
      
    }
    this.gutterCheck(this.width, this.height);
 }
}


//incomplete bonus missions
// Just like the original studio, change the code to prevent the rocket image from flying off the colored background.

// Dynamically adjust the enabled/disabled status of the direction buttons based on the position of the rocket.

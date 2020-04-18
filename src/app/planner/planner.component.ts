import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.scss'],
})
export class PlannerComponent implements OnInit {

  constructor() { }

  // private body = this.document.body;
  tilted = false;

  toggleTilt() {
    this.tilted = !this.tilted;
    // console.log(this.document.body.classList);
  }

  // body.addEventListener('click', toggleTilt);
  // body.addEventListener('touchstart', toggleTilt);
  // if(location.pathname.match(/fullcpgrid/i)) setTimeout(toggleTilt, 1000);

  ngOnInit(): void {
    if (location.pathname.match('/fullcpgrid/i')) {
      setTimeout(this.toggleTilt, 1000);
    }
  }

}

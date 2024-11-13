import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
  standalone: true,
  imports: [RouterModule]
})
export class LandingPage implements OnInit {

  constructor() { }
  ngOnInit(): void {
    console.log("Tamo indo")
  }
}

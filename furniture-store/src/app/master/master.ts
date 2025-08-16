import { Component } from '@angular/core';
import { Banner } from "../banner/banner";
import { DayOffer } from "../day-offer/day-offer";

@Component({
  selector: 'app-master',
  imports: [Banner, DayOffer],
  templateUrl: './master.html',
  styleUrl: './master.css'
})
export class Master {

}

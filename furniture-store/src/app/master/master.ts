import { Component } from '@angular/core';
import { Banner } from "../banner/banner";
import { DayOffer } from "../day-offer/day-offer";
import { BestSelling } from "../best-selling/best-selling";

@Component({
  selector: 'app-master',
  imports: [Banner, DayOffer, BestSelling],
  templateUrl: './master.html',
  styleUrl: './master.css'
})
export class Master {

}

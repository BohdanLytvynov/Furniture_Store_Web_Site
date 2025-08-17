import { Component } from '@angular/core';
import { Banner } from "../banner/banner";
import { DayOffer } from "../day-offer/day-offer";
import { BestSelling } from "../best-selling/best-selling";
import { Gallery } from "../gallery/gallery";

@Component({
  selector: 'app-master',
  imports: [Banner, DayOffer, BestSelling, Gallery],
  templateUrl: './master.html',
  styleUrl: './master.css'
})
export class Master {

}

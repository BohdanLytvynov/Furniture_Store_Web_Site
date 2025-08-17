import { Component } from '@angular/core';
import { Banner } from "../banner/banner";
import { DayOffer } from "../day-offer/day-offer";
import { BestSelling } from "../best-selling/best-selling";
import { Gallery } from "../gallery/gallery";
import { Contact } from "../contact/contact";

@Component({
  selector: 'app-master',
  imports: [Banner, DayOffer, BestSelling, Gallery, Contact],
  templateUrl: './master.html',
  styleUrl: './master.css'
})
export class Master {

}

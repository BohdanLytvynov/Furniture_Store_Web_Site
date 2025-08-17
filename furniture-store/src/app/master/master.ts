import { Component } from '@angular/core';
import { Banner } from "../banner/banner";
import { DayOffer } from "../day-offer/day-offer";
import { BestSelling } from "../best-selling/best-selling";
import { Gallery } from "../gallery/gallery";
import { Contact } from "../contact/contact";
import { Footer } from "../footer/footer";
import { LoginRegisterModalBox } from "../login-register-modal-box/login-register-modal-box";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-master',
  imports: [Banner, DayOffer, BestSelling, Gallery, Contact, Footer, LoginRegisterModalBox, CommonModule],
  templateUrl: './master.html',
  styleUrl: './master.css'
})
export class Master {

onHambFurnitureClicked() {  
  this.hambFurmitureClicked = !this.hambFurmitureClicked;
}

  showModal : boolean = false;
  menuItemClicked : boolean = false;

  hambClicked : boolean = false;
  hambFurmitureClicked : boolean = false;
  
  onLoginRegisterModelClosed()
  {
    this.showModal = false;
  }

  onLoginClicked()
  {
    this.showModal = true;
  }

  onMenuItemClick(){
    this.menuItemClicked = !this.menuItemClicked;
  }

  onHambMenuClicked()
  {
    this.hambClicked = !this.hambClicked;
  }
}

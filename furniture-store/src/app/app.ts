import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Master } from "./master/master";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Master],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'furniture-store';
}

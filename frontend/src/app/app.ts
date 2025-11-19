import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header-component/header-component";
import { PaginateComponent } from "./components/paginate-component/paginate-component";
import { ListComponent } from "./components/list-component/list-component";
import { CardComponent } from "./components/card-component/card-component";
import { FooterComponent } from "./components/footer-component/footer-component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent, 
    PaginateComponent, 
    ListComponent, 
    CardComponent, 
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Jobs API Frontend');
}
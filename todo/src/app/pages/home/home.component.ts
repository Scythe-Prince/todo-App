import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { BodycontentComponent } from '../../components/bodycontent/bodycontent.component';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent,SidebarComponent,BodycontentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}

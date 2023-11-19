import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-about-me',
  template: '<p>About Me Component</p>',
  standalone: true,
  imports: [CommonModule,MatButtonModule,MatCardModule, MatExpansionModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {
  panelOpenState = true
}

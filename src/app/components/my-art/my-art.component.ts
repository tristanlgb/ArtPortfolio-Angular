import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-my-art',
  template: '<p>My Art Component</p>',
  standalone: true,
  imports: [CommonModule,MatButtonModule,MatCardModule,],
  templateUrl: './my-art.component.html',
  styleUrl: './my-art.component.css'
})
export class MyArtComponent {

}

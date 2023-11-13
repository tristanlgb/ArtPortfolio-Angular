import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-art',
  template: '<p>My Art Component</p>',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-art.component.html',
  styleUrl: './my-art.component.css'
})
export class MyArtComponent {

}

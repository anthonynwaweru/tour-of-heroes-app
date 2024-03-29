import { CommonModule, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Hero } from '../hero';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [NgIf, CommonModule, FormsModule],
  template: `
    <div *ngIf="hero">
      <h2>{{ hero.name | uppercase }} Details</h2>
      <div><span>id: </span>{{ hero.id }}</div>
      <div>
        <label for="hero-name">Hero name: </label>
        <input id="hero-name" [(ngModel)]="hero.name" placeholder="name" />
      </div>
    </div>
  `,
  styleUrl: './hero-detail.component.css',
})
export class HeroDetailComponent {
  @Input() hero?: Hero;
}

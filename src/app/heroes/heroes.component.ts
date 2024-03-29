import { Component } from '@angular/core';
import { Hero } from '../hero';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HEROES } from '../mock-heroes';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule, FormsModule, NgFor, NgIf, HeroDetailComponent],
  template: `
    <section>
      <h2>My Heroes</h2>
      <ul class="heroes">
        <li *ngFor="let hero of heroes">
          <button
            type="button"
            (click)="onSelect(hero)"
            [class.selected]="hero === selectedHero"
          >
            <span class="badge"> {{ hero.id }}</span>
            <span class="name">{{ hero.name }}</span>
          </button>
        </li>
      </ul>
      <h2>{{ hero.name | uppercase }} Details</h2>
      <div><span>id: </span>{{ hero.id }}</div>
      <div><span>name: </span>{{ hero.name }}</div>
      <div>
        <label for="name">Hero name: </label>
        <input id="name" [(ngModel)]="hero.name" placeholder="name" />
      </div>
    </section>
    <app-hero-detail [hero]="selectedHero"></app-hero-detail>
  `,
  styleUrl: './heroes.component.css',
})
export class HeroesComponent {
  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  hero: Hero = { id: 1, name: 'Windstorm' };
  heroes = HEROES;
}

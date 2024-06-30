import { Component } from '@angular/core';

@Component({
  selector: 'app-herores-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {


  public name: string = "IronMan"
  public age: number = 45

  get capitalizeName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age} años`
  }

  changeNameHero(): void {
    this.name = "Spider-Man"
  }

  changeAgeHero(): void {
    this.age = 32
  }

  resetHero(): void {
    this.name = `IronMan`;
    this.age = 45
  }
}

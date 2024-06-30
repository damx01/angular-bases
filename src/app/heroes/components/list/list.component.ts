import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public title:string ="Listado de Heroes"
  public heroNames: string[] = ['Spiderman', 'Thor', 'Hulk', 'captain America', 'Black Widow', 'Doctor Strange',]
  public deletedHero: string | undefined

  removeLastHero(): void {
    this.deletedHero = this.heroNames.pop()

  }

}

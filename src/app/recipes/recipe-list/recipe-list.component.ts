import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A test Recipe', 'This is a Test Recipe', 'https://media.defense.gov/2011/Feb/04/2000288219/780/780/0/110201-F-6881R-001.JPG'
    ),
    new Recipe(
      'A test Recipe', 'This is a Test Recipe', 'https://media.defense.gov/2011/Feb/04/2000288219/780/780/0/110201-F-6881R-001.JPG'
    ),
    new Recipe(
      'A test Recipe', 'This is a Test Recipe', 'https://media.defense.gov/2011/Feb/04/2000288219/780/780/0/110201-F-6881R-001.JPG'
    ), new Recipe(
      'A test Recipe', 'This is a Test Recipe', 'https://media.defense.gov/2011/Feb/04/2000288219/780/780/0/110201-F-6881R-001.JPG'
    )
  ]

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>()
  
  recipes: Recipe[] = [
    new Recipe(
      'A test Recipe', 'This is a Test Recipe', 'https://media.defense.gov/2011/Feb/04/2000288219/780/780/0/110201-F-6881R-001.JPG'
    ),
    new Recipe(
      'Another Recipe', 'Has some words about things', 'https://media.defense.gov/2011/Feb/04/2000288219/780/780/0/110201-F-6881R-001.JPG'
    ),
    new Recipe(
      'Third one', 'This is a Test Recipe.Has some words about things', 'https://media.defense.gov/2011/Feb/04/2000288219/780/780/0/110201-F-6881R-001.JPG'
    ),
  ]

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe)
  }

}

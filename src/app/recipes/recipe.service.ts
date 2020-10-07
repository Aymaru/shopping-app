import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
    

    private recipes: Recipe[] = [
        new Recipe(
            'Filet de pescado al ajillo',
            'Delicioso filet de pescado al ajillo con ensalada para dos personas',
            'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
            [ new Ingredient ('Filet de pescado',2), 
              new Ingredient ('Tomate', 1),
              new Ingredient ('Lechuga', 2),
              new Ingredient ('Aguacate', 1) ]
        ),
        new Recipe(
            'Pizza de Pepperoni',
            'Pizza de pepperoni con queso',
            'https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg',
            [ new Ingredient ('Masa para pizza', 1),
              new Ingredient ('Tomate', 4),
              new Ingredient ('Queso', 1),
              new Ingredient ('Pepperoni', 12)]
        )
    ];
    
    constructor(private shoppingListService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
    
    getRecipe(index: number) {
        return this.recipes[index];
    }
}
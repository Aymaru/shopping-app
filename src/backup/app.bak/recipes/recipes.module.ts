import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { RecipesRoutingModule } from './recipes-routing.module';

import { RecipesComponent } from './recipes.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeInfoComponent } from './recipe-info/recipe-info.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipesComponent,
    RecipeInfoComponent,
    RecipeEditComponent,
  ],
  imports: [
    RouterModule,
    ReactiveFormsModule,
    RecipesRoutingModule,
    SharedModule,
  ],
})
export class RecipesModule {}

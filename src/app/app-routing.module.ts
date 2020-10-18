import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeInfoComponent } from './recipes/recipe-info/recipe-info.component';
import { RecipesResolverService } from './recipes/recipes-resolver.service';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';


const appRoutes: Routes = [
    {path: '', redirectTo: '/recipes', pathMatch: 'full'},
    {path: 'recipes', component: RecipesComponent, 
        children: [
            {path: '',component: RecipeInfoComponent, pathMatch: 'full'},
            {path: 'new', component: RecipeEditComponent},
            {path: ':id', component: RecipeDetailComponent, resolve: [RecipesResolverService]},
            {path: ':id/edit', component: RecipeEditComponent, resolve: [RecipesResolverService]}
        ]},
    {path: 'shopping-list', component: ShoppingListComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule {
    
}
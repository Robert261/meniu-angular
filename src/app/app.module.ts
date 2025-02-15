import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { ProduseComponent } from './produse/produse.component';
import { AuthComponent } from './auth/auth.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routingComponent } from './app-routing.module';
import { MatCardModule } from '@angular/material/card';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { HeaderComponent } from './header/header.component';
import { ProduseInfoComponent } from './produse/produse-info/produse-info.component';
import { ProduseListaComponent } from './produse/produse-lista/produse-lista.component';
import { ProdusIdComponent } from './produse/produse-lista/produs-id/produs-id.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProduseComponent,
    AuthComponent,
    routingComponent,
    ShoppingEditComponent,
    HeaderComponent,
    ProduseInfoComponent,
    ProduseListaComponent,
    ProdusIdComponent,
    ShoppingListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    MatCardModule,
    MatMenuModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

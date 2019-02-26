import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router';

/* FIREBASE */
import { AngularFireModule } from "@angular/fire";
import { environment } from "../environments/environment";
import { AngularFirestoreModule } from "@angular/fire/firestore";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarUComponent } from './components/componentes/user/navbar-u/navbar-u.component';
import { LoginUComponent } from './components/componentes/user/login-u/login-u.component';
import { RegisterUComponent } from './components/componentes/user/register-u/register-u.component';
import { LostaccountUComponent } from './components/componentes/user/lostaccount-u/lostaccount-u.component';
import { ProfileUComponent } from './components/componentes/user/profile-u/profile-u.component';
import { NavbarAComponent } from './components/componentes/admin/navbar-a/navbar-a.component';
import { ProductsComponent } from './components/componentes/productos/products/products.component';
import { ProductsformComponent } from './components/componentes/productos/productsform/productsform.component';
import { VistaprodComponent } from './components/componentes/productos/vistaprod/vistaprod.component';
import { LoginComponent } from './components/vistas/login/login.component';
import { LostpassComponent } from './components/vistas/lostpass/lostpass.component';
import { RegisterComponent } from './components/vistas/register/register.component';
import { EditproductsComponent } from './components/vistas/admin/editproducts/editproducts.component';
import { PrincipalComponent } from './components/vistas/principal/principal.component';
import { CarouselComponent } from './components/componentes/productos/carousel/carousel.component';
import { NavegacionBienvenidaComponent } from './components/vistas/navegacion-bienvenida/navegacion-bienvenida.component';
import { NavegacionClienteComponent } from './components/vistas/navegacion-cliente/navegacion-cliente.component';
import { NavegacionAdminComponent } from './components/vistas/navegacion-admin/navegacion-admin.component';
import { PrincipalAdminComponent } from './components/vistas/admin/principal-admin/principal-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarUComponent,
    LoginUComponent,
    RegisterUComponent,
    LostaccountUComponent,
    ProfileUComponent,
    NavbarAComponent,
    ProductsComponent,
    ProductsformComponent,
    VistaprodComponent,
    LoginComponent,
    LostpassComponent,
    RegisterComponent,
    EditproductsComponent,
    PrincipalComponent,
    CarouselComponent,
    NavegacionBienvenidaComponent,
    NavegacionClienteComponent,
    NavegacionAdminComponent,
    PrincipalAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

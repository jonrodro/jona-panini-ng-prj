import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

//Import del archivo que tiene las rutas, se debe agregar a los imports
import { AppRoutingModule } from './app.routes.module';

// Componentes que deben ser agregados a los declarations
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumDisplayComponent } from './albums/album-display/album-display.component';
import { AlbumAddComponent } from './albums/album-add/album-add.component';
import { StickersComponent } from './stickers/stickers.component';
import { StickerDisplayComponent } from './stickers/sticker-display/sticker-display.component';
import { StickerAddComponent } from './stickers/sticker-add/sticker-add.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuarioDisplayComponent } from './usuarios/usuario-display/usuario-display.component';
import { UsuarioAgregarComponent } from './usuarios/usuario-agregar/usuario-agregar.component';

//servicios creados deben ser agregados en los providers 
import { AlbumsService } from './services/albums.service';
import { StickersService } from './services/stickers.service';
import { UsuariosService } from './services/usuarios.service';
import { DataService } from './services/data.service';
import { AuthService } from './services/auth.service';
import { TextContainsValidator } from './shared/text-contains.directive';
import { GreaterThanValidator } from './shared/greater-than.directive';
import { LessThanValidator } from './shared/less-than.directive';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NavComponent,
    AlbumsComponent,
    AlbumDisplayComponent,
    AlbumAddComponent,
    StickersComponent,
    StickerDisplayComponent,
    StickerAddComponent,
    HomeComponent,
    UsuariosComponent,
    UsuarioDisplayComponent,
    UsuarioAgregarComponent,
    TextContainsValidator,
    GreaterThanValidator,
    LessThanValidator
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    AlbumsService,
    StickersService,
    UsuariosService,
    DataService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { HomeComponent } from './navegacao/home/home.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { RouterModule } from '@angular/router';
import { rooteRouterConfig } from './app.route';
import { APP_BASE_HREF } from '@angular/common';
import { from } from 'rxjs';
import { ListaProdutoComponent } from './produto/lista-produto/lista-produto.component';
import { ProdutoService } from './produto/produto.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    SobreComponent,
    ContatoComponent,
    ListaProdutoComponent
  ],
  imports: [
    BrowserModule,
    [RouterModule.forRoot(rooteRouterConfig, { useHash: false})],
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    ProdutoService,
    { provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

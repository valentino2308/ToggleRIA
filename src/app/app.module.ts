import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ToogleAppComponent } from './tooggle/toogle-app/toogle-app.component';
import { ComponentListComponent } from './tooggle/component-list/component-list.component';
import { ComponentItemComponent } from './tooggle/component-item/component-item.component';
import { ComponentFeaturesComponent } from './tooggle/component-features/component-features.component';
import { ToogleMenuComponent } from './tooggle/toogle-menu/toogle-menu.component';
import { FormsModule } from '@angular/forms';
import { ComponentModalParamComponent } from './tooggle/component-modal-param/component-modal-param.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SelectedLineDirective } from './directives/selected-line.directive';
import { ComponentProcessComponent } from './tooggle/component-process/component-process.component';
import { ROUTING } from './app.routing';
import { ComponentEmptyComponent } from './tooggle/component-empty/component-empty.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ToogleAppComponent,
    ComponentListComponent,
    ComponentItemComponent,
    ComponentFeaturesComponent,
    ToogleMenuComponent,
    ComponentModalParamComponent,
    SelectedLineDirective,
    ComponentProcessComponent,
    ComponentEmptyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

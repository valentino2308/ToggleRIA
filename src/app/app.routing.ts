import { RouterModule, Routes } from "@angular/router";
import { ComponentEmptyComponent } from './tooggle/component-empty/component-empty.component';
import { ComponentFeaturesComponent } from './tooggle/component-features/component-features.component';
import { ComponentProcessComponent } from './tooggle/component-process/component-process.component';



const APP_ROUTING : Routes = [
    {path : '', component : ComponentEmptyComponent}, 
    {path : 'main/:id', component : ComponentFeaturesComponent},     
    {path : 'process/:id', component : ComponentProcessComponent},
];

export const ROUTING = RouterModule.forRoot(APP_ROUTING);
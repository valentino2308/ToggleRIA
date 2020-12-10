import {Feature} from "./Feature";
import { Server } from './Server';

export class FeatureCategory {
    
    key : String;
    label : String;
    features : Feature[];
    servers : Server[];

   constructor(key : String, label : String, features : Feature[], servers : Server[]) {
       this.key = key;
       this.label = label;
       this.features = features;
       this.servers = servers;
   }

}
import {Feature} from './Feature';
import { Server } from './Server';

export class FeatureCategory {
    key: string;
    label: string;
    features: Feature[];
    servers: Server[];
   constructor(key: string, label: string, features: Feature[], servers: Server[]) {
       this.key = key;
       this.label = label;
       this.features = features;
       this.servers = servers;
   }
}

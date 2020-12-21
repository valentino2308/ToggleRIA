export class Feature {
    featureName: string;
    active: boolean;
    comment: string;
    selected: boolean;

   constructor(key: string, active: boolean, comment: string, selected: boolean) {
       this.featureName = key;
       this.active = active;
       this.comment = comment;
       this.selected = selected;
   }

}

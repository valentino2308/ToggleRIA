export class Feature {
    key : String;
    value : boolean;
    comment : String;
    selected : boolean;

   constructor(key : String, value : boolean,comment : String, selected : boolean) {
       this.key = key;
       this.value = value;
       this.comment = comment;
       this.selected = selected;
   }

}
import { Component } from '@angular/core';
import {ListeService} from './liste.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
     liste : any [] ;

   constructor(private  listeS : ListeService) {
  this.liste = this.listeS.getliste()

   }
  b  : any = {} ;
  

   view(a) {
       let x = this.liste.indexOf(a) ;
       this.b = this.liste[x] ;

   }

}

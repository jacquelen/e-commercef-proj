import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { FavouriteService } from '../favourite.service';
import { PdtcounterService } from '../pdtcounter.service';

@Component({
  selector: 'app-favouritelist',
  templateUrl: './favouritelist.component.html',
  styleUrls: ['./favouritelist.component.css']
})
export class FavouritelistComponent implements OnInit {
 
 sub:Subscription;
 productararay:Array<any>;
  constructor(private favsevice:FavouriteService ) { }

  ngOnInit(): void {
    this.sub=this.favsevice.pdts.subscribe(value=>this.productararay=value)
    console.log(this.productararay)
  }

  removeitem(item): void{
    console.log(this.productararay);
    this.favsevice.removeitem(item)
    
     }

    //  handleaddtowishlist(){
    
    //  }
    //  handleremovewishlist(){

    //  }
}

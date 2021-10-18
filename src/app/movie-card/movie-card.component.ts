import { Component, OnInit ,Input, Output ,EventEmitter} from '@angular/core';
import{Router} from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { FavouriteService } from '../favourite.service';
import { PdtcounterService } from '../pdtcounter.service';
import { Favourte } from '../store/fav/fav.action';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
   @Input() movie :any;
   @Output () sendMovie =new EventEmitter();

   hello :string ="hello from child";
   productcount:number;
  subsribe:Subscription;
  sub:Subscription;
  productararay:Array<any>;
  wish:boolean;
  constructor(private router :Router ,private productservice : PdtcounterService , private store :Store<any>,
    private favsevice :FavouriteService
    ) { }

  ngOnInit(): void {
  }
  senddatatoparent(id){
    // this.sendMovie.emit(this.movie);
    this.router.navigate([`details/${id}`])
    // this.productservice.updateProductcounter(this.productcount+1)
  }
  
  addtowishlist(movie){
    this.subsribe=this.productservice.currentproductcount.subscribe(value=>this.productcount=value);
    this.favsevice.addToCart(movie);
    this.favsevice.getwishitem().subscribe(()=>this.wish=true);
  console.log(this.wish)
  }
  removeitem(item): void{
    this.sub=this.favsevice.pdts.subscribe(()=>this.wish =false)
    this.favsevice.removeitem(item)
    
     }
}

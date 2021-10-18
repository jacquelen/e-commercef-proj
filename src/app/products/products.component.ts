import { Component, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { PdtcounterService } from '../pdtcounter.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
sub:Subscription;
subsc:Subscription;
subsribe:Subscription;
//////////////////////////////
productararay:Array<any>;
public  grandtotal !:number;
productcount: number;
quantitypdt:number=0 ;
totalprice:any=0;
qt:number=0;
pr:number=0;
constructor(private route :ActivatedRoute ,private protuctservice :PdtcounterService) {

  }
  
  ngOnInit(): void {
    this.subsribe=this.protuctservice.currentproductcount.subscribe(value=>this.productcount=value)
    this.sub=this.protuctservice.pdt.subscribe(value=>this.productararay=value)
    // this.protuctservice.currentprice.subscribe(value=>this.grandtotal=value)
  }
  removeitem(item): void{
    this.protuctservice.removeitem(item)
    for(let i in this.productararay){
      if(this.productararay[i].id=item.id){
        this.pr-=(item.q*item.price)
      }
    }
    
  }
  addToCards(item): void{
    let productq= false;
    for(let i in this.productararay){
      if(this.productararay[i].id== item.id ){
        productq =true;
        break;
      }
    }  
    if(!productq){
      this.protuctservice .updateProductcounter(this.productcount)
      this.protuctservice .updateProductcounter(this.productcount+1)
    }
    this.addq(item)
  }  
  
  addq(item){
    for(let i in this.productararay){
      if(this.productararay[i].id ==item.id ){
        this.qt=item.q++
          this.pr;
          this.pr+=item.price;
           break;
      }
    }
}
dec(item){
  let productq= false;
  for(let i in this.productararay){
    if(this.productararay[i].id== item.id ){
      productq =true;
      break;
    }
  }  
  if(!productq){
    this.protuctservice .updateProductcounter(this.productcount)
    this.protuctservice .updateProductcounter(this.productcount+1)
  }

for(let i in this.productararay){
  if(this.productararay[i].id==item.id){
     item.q--
    this.pr
     this.pr-=item.price;
     console.log(item.price ,"price")
     break
  }
}
}


  }
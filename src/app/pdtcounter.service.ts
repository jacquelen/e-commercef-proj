import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PdtcounterService {

    private productcount = new BehaviorSubject(0)
    currentproductcount=this.productcount.asObservable();

///////////////////////////////////////////////
    public cartItemList :any =[]
    public productList = new BehaviorSubject<any>([])
    pdt= this.productList.asObservable();

/////////////////////////////////////////
public quntity =new BehaviorSubject(0)
currentquantity =this.quntity.asObservable()
///////////////////////////////

   public price = new BehaviorSubject(0)
   currentprice=this.price.asObservable()
////////////////////////////////
  constructor() { }
updatequantity(newquntity:number){
  this.quntity.next(newquntity);
}
//////////////////////////////////////
  updateProductcounter(newCountValue:number):void{
    this.productcount.next(newCountValue);
  }
  updateprice(newprice){
    this.price.next(newprice)
  }
 
  getpproduct():any{
 return this.productList.asObservable();

  }
   
  setproduct(product){
    this.cartItemList.push(...product)
    this.productList.next(product)
  }
  addToCart(product:any){
this.cartItemList.push(product);
this.productList.next(this.cartItemList)
this.getproductprice()
  }
  getproductprice():number{
    let grandtotal=0;
    this.cartItemList.map((a:any)=>{
      grandtotal=grandtotal+a.price;
      this.price.next(grandtotal)
    })
    return grandtotal;
  }
  removeitem(item:any): void{
  this.cartItemList.map((a:any,index:any)=>{
    if(item.id == a.id){
 this.cartItemList.splice(index,1)
    }
    this.productList.next(this.cartItemList)
  })
  }
//  removeAllcart(){
//    this.cartItemList=[];
//    this.productList.next(this.cartItemList)
//  }

}


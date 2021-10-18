import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {
  constructor() { }
  public cartItemLists :any =[]
  public productLists = new BehaviorSubject<any>([])
  pdts= this.productLists.asObservable();
  public  favc:boolean ;
  public wishitem= new BehaviorSubject<boolean>(true)
  f=this.wishitem.asObservable();
////////////////////////////////////////
// private productcount = new BehaviorSubject(0)
//     currentproductcount=this.productcount.asObservable();

//   updateProductcounter(newCountValue:number):void{
//     console.log(newCountValue)
//     this.productcount.next(newCountValue);
//   }

////////////////////////
  getwishitem(){
    return this.wishitem.asObservable()
  }
  getfliterwishlist():any{
    this.productLists.pipe(map((reslut)=>{
     let wishid=[];
      reslut.forEach(item=>wishid.push(item.id))
     return wishid

    }))
  }
  
  getpproduct():any{
    return this.productLists.asObservable();   
     }
      
     setproduct(product){
       this.cartItemLists.push(...product)
       this.productLists.next(product)
     }
     addToCart(product:any){
   this.cartItemLists.push(product);
   this.productLists.next(this.cartItemLists)
   console.log(this.cartItemLists);
     }

     
     removeitem(item:any): void{
     this.cartItemLists.map((a:any,index:any)=>{
       if(item.id == a.id){
    this.cartItemLists.splice(index,1)
       }
       this.productLists.next(this.cartItemLists)
     })
     }
}

import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PdtcounterService } from '../pdtcounter.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  productcount:number;
  subsribe:Subscription;
  subcribe:Subscription;
  

  constructor(private protuctservice :PdtcounterService) { }

  ngOnInit(): void {
    this.subsribe=this.protuctservice .currentproductcount.subscribe(value=>this.productcount=value)
    // this.productcount= this.pdtservice.currentproductcount.subscribe((value)=>
    // {this.productcount=value})
  
  }


}

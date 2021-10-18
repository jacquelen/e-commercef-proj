import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturecomComponent } from './featurecom/featurecom.component';



@NgModule({
  declarations: [
    FeaturecomComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FeaturecomComponent
  ]
})
export class LaboneModule { }

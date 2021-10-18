import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturecomComponent } from './featurecom.component';

describe('FeaturecomComponent', () => {
  let component: FeaturecomComponent;
  let fixture: ComponentFixture<FeaturecomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturecomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturecomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

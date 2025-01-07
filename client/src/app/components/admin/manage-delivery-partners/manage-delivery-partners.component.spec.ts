import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageDeliveryPartnersComponent } from './manage-delivery-partners.component';

describe('ManageDeliveryPartnersComponent', () => {
  let component: ManageDeliveryPartnersComponent;
  let fixture: ComponentFixture<ManageDeliveryPartnersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageDeliveryPartnersComponent]
    });
    fixture = TestBed.createComponent(ManageDeliveryPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

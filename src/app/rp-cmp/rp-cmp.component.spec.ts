import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RpCmpComponent } from './rp-cmp.component';

describe('RpCmpComponent', () => {
  let component: RpCmpComponent;
  let fixture: ComponentFixture<RpCmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RpCmpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RpCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

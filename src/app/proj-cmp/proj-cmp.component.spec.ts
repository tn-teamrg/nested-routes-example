import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjCmpComponent } from './proj-cmp.component';

describe('ProjCmpComponent', () => {
  let component: ProjCmpComponent;
  let fixture: ComponentFixture<ProjCmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjCmpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

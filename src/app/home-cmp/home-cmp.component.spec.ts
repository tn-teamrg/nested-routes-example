import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCmpComponent } from './home-cmp.component';

describe('HomeCmpComponent', () => {
  let component: HomeCmpComponent;
  let fixture: ComponentFixture<HomeCmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeCmpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

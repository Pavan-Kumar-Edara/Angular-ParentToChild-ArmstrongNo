import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildArmstrongComponent } from './child-armstrong.component';

describe('ChildArmstrongComponent', () => {
  let component: ChildArmstrongComponent;
  let fixture: ComponentFixture<ChildArmstrongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildArmstrongComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildArmstrongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

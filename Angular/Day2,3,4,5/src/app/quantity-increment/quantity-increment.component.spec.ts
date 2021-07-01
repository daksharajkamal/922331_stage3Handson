import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantityIncrementComponent } from './quantity-increment.component';

import { FormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';

describe('QuantityIncrementComponent', () => {
  let component: QuantityIncrementComponent;
  let fixture: ComponentFixture<QuantityIncrementComponent>;
  let debugElement: DebugElement;

  imports:[FormsModule]

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuantityIncrementComponent ]
    })
    .compileComponents();
  });

  /*beforeEach(() => {
    fixture = TestBed.createComponent(QuantityIncrementComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    let clickMeButton = debugElement.nativeElement.querySelector('#clickMe');
    clickMeButton.click();
    fixture.detectChanges();
    expect(debugElement.nativeElement.querySelector('#simpleClick').textContent).toEqual(component.msg);
  });
*/
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

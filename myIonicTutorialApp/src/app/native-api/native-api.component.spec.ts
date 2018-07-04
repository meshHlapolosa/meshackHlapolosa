/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NativeAPIComponent } from './native-api.component';

describe('NativeAPIComponent', () => {
  let component: NativeAPIComponent;
  let fixture: ComponentFixture<NativeAPIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NativeAPIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NativeAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

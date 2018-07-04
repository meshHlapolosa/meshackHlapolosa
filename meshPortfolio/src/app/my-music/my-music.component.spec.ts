/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyMusicComponent } from './my-music.component';

describe('MyMusicComponent', () => {
  let component: MyMusicComponent;
  let fixture: ComponentFixture<MyMusicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyMusicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

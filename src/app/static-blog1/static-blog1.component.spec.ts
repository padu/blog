import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticBlog1Component } from './static-blog1.component';

describe('StaticBlog1Component', () => {
  let component: StaticBlog1Component;
  let fixture: ComponentFixture<StaticBlog1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticBlog1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticBlog1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

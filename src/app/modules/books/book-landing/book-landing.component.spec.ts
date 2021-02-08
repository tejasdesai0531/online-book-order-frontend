import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookLandingComponent } from './book-landing.component';

describe('BookLandingComponent', () => {
  let component: BookLandingComponent;
  let fixture: ComponentFixture<BookLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCategoriesComponent } from './book-categories.component';

describe('BookCategoriesComponent', () => {
  let component: BookCategoriesComponent;
  let fixture: ComponentFixture<BookCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

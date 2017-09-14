import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsFetchComponent } from './news-fetch.component';

describe('NewsFetchComponent', () => {
  let component: NewsFetchComponent;
  let fixture: ComponentFixture<NewsFetchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsFetchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsFetchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

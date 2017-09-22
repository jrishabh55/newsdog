import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawalRequestComponent } from './withdrawal-request.component';

describe('WithdrawalRequestComponent', () => {
  let component: WithdrawalRequestComponent;
  let fixture: ComponentFixture<WithdrawalRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithdrawalRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithdrawalRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

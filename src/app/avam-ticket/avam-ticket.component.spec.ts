import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvamTicketComponent } from './avam-ticket.component';

describe('AvamTicketComponent', () => {
  let component: AvamTicketComponent;
  let fixture: ComponentFixture<AvamTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvamTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvamTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

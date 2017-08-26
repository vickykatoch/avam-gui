import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StringAlgoComponent } from './string-algo.component';

describe('StringAlgoComponent', () => {
  let component: StringAlgoComponent;
  let fixture: ComponentFixture<StringAlgoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StringAlgoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StringAlgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

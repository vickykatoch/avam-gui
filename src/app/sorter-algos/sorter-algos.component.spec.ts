import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SorterAlgosComponent } from './sorter-algos.component';

describe('SorterAlgosComponent', () => {
  let component: SorterAlgosComponent;
  let fixture: ComponentFixture<SorterAlgosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SorterAlgosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SorterAlgosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PillboxListComponent } from './pillbox-list.component';

describe('PillboxListComponent', () => {
  let component: PillboxListComponent;
  let fixture: ComponentFixture<PillboxListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PillboxListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PillboxListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

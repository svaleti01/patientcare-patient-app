import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PillboxAddComponent } from './pillbox-add.component';

describe('PillboxAddComponent', () => {
  let component: PillboxAddComponent;
  let fixture: ComponentFixture<PillboxAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PillboxAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PillboxAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

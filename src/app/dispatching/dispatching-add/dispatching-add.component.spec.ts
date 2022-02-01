import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispatchingAddComponent } from './dispatching-add.component';

describe('DispatchingAddComponent', () => {
  let component: DispatchingAddComponent;
  let fixture: ComponentFixture<DispatchingAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispatchingAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispatchingAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

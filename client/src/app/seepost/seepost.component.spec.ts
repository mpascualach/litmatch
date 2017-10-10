import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeepostComponent } from './seepost.component';

describe('SeepostComponent', () => {
  let component: SeepostComponent;
  let fixture: ComponentFixture<SeepostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeepostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeepostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

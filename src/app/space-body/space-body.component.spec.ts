import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceBodyComponent } from './space-body.component';

describe('SpaceBodyComponent', () => {
  let component: SpaceBodyComponent;
  let fixture: ComponentFixture<SpaceBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaceBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HackathonEditComponent } from './hackathon-edit.component';

describe('HackathonEditComponent', () => {
  let component: HackathonEditComponent;
  let fixture: ComponentFixture<HackathonEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HackathonEditComponent]
    });
    fixture = TestBed.createComponent(HackathonEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

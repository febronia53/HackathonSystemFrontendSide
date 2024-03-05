import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HackathonCreateComponent } from './hackathon-create.component';

describe('HackathonCreateComponent', () => {
  let component: HackathonCreateComponent;
  let fixture: ComponentFixture<HackathonCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HackathonCreateComponent]
    });
    fixture = TestBed.createComponent(HackathonCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

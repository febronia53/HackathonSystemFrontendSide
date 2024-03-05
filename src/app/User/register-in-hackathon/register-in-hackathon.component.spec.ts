import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterInHackathonComponent } from './register-in-hackathon.component';

describe('RegisterInHackathonComponent', () => {
  let component: RegisterInHackathonComponent;
  let fixture: ComponentFixture<RegisterInHackathonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterInHackathonComponent]
    });
    fixture = TestBed.createComponent(RegisterInHackathonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

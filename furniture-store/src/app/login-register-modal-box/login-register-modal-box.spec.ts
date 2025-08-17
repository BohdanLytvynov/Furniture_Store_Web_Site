import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRegisterModalBox } from './login-register-modal-box';

describe('LoginRegisterModalBox', () => {
  let component: LoginRegisterModalBox;
  let fixture: ComponentFixture<LoginRegisterModalBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginRegisterModalBox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginRegisterModalBox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

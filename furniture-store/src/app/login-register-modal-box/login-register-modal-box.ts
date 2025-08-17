import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login-register-modal-box',
  imports: [CommonModule],
  templateUrl: './login-register-modal-box.html',
  styleUrl: './login-register-modal-box.css',
})
export class LoginRegisterModalBox {
  signupLogin : boolean = true;//signup - true login - false

  @Output()
  onModalClose: EventEmitter<undefined> = new EventEmitter<undefined>();

  onCloseModalClicked() {
    this.onModalClose.emit();
  }

  onShowLoginClicked() {
    this.signupLogin = false;
  }

  onShowSignUpClicked() {
    this.signupLogin = true;
  }
}

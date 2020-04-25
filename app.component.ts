import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public dialog: MatDialog) {
    this.openLoginModal();
  }

  openLoginModal() {
    this.dialog.open(LoginComponent, {panelClass: 'modal'});
  }
}

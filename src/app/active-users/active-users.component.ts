import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from 'app/shared/user.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {

  constructor(private userService: UserService) {
  }

  onSetToInactive(id: number) {
    this.userService.setToInactive(id);
  }
}

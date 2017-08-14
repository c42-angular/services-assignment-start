import { CounterInjectedService } from 'app/shared/counter-injected.service';
import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class UserService {
  @Output() statusChanged = new EventEmitter<void>();
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  constructor(private counterService: CounterInjectedService){
  }
  
  setToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.increment();
    this.statusChanged.emit();
  }

  setToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.increment();
    this.statusChanged.emit()
  }
}

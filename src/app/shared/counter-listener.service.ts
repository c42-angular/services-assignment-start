import { UserService } from "app/shared/user.service";
import { Injectable } from "@angular/core";

@Injectable()
export class CounterListenerService {
    private counter = 0;

    constructor(private userService: UserService){
        this.userService.statusChanged.subscribe(() => {
            this.counter++;
            console.log('CounterListenerService is now ' + this.counter);
        });
    }

    onStatusChanged(){

    }
}
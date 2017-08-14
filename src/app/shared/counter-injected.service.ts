export class CounterInjectedService {
    private counter = 0;

    increment() {
        this.counter++;
        console.log('CounterInjectedService is now ' + this.counter);
    }
}
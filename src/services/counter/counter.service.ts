import { Injectable } from '@angular/core';
import { interval } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class CounterService {
    counter = 0;
    count: any;
    mySub: any;
    interval$ = interval(1000);

    counterStart() {
        this.mySub = this.interval$
            .subscribe((val) => {
                this.counter = val;
            });
    }
    clearCounter() {
        this.mySub.unsubscribe();
        this.counter = 0;
    }
}

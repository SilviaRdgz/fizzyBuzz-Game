import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class PointService {
    score = 0;
    counter = 0;

    addPoint() {
        this.score += 1;
    }
    resetScore() {
        this.score = 0;
    }
    removePoint() {
        this.score -= 0;
    }
    pointMessage() {

    }
}

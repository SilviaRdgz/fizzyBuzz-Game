import { Component } from '@angular/core';
import { SoundService } from '../services/sound/sound.service';
import { CounterService } from '../services/counter/counter.service';
import { PointService } from '../services/points/point.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [SoundService, CounterService, PointService],
})

export class AppComponent {
    title = 'FizzyBuzz Game';
    click = false;

    constructor(
        private soundService: SoundService,
        public counterService: CounterService,
        public pointService: PointService,
    ) {}

    startBtn() {
        this.counterService.counterStart();
        this.soundService.playbgSound();
        this.click = ! this.click;
    }
    resetBtn() {
        this.counterService.clearCounter();
        this.pointService.resetScore();
        this.pointService.score = 0;
        this.soundService.stopbgSound();
        this.soundService.playResetSound();
        this.click = ! this.click;
    }

    fizzBtn() {
        const isMultipleOfThree = this.counterService.counter % 3 === 0;
        this.soundService.playNoPointSound();
        if (this.counterService.counter === 0) {
            return;
        }
        if (isMultipleOfThree) {
            this.pointService.addPoint();
            this.soundService.clearNopointSound();
            this.soundService.playPointEffect();
        }
        if (! isMultipleOfThree) {
            this.pointService.removePoint();
        }
    }

    buzzBtn() {
        const isMultipleOfFive = this.counterService.counter % 5 === 0;
        this.soundService.playNoPointSound();
        if (this.counterService.counter === 0) {
            return;
        }
        if (isMultipleOfFive) {
            this.pointService.addPoint();
            this.soundService.clearNopointSound();
            this.soundService.playPointEffect();
        }
        if (! isMultipleOfFive) {
            this.pointService.removePoint();
        }
    }

    fizzBuzzBtn() {
        const isMultipleOfThreeAndFive = (this.counterService.counter % 3 === 0
          && this.counterService.counter % 5 === 0);
        this.soundService.playNoPointSound();
        if (this.counterService.counter === 0) {
            return;
        }
        if (isMultipleOfThreeAndFive) {
            this.pointService.addPoint();
            this.soundService.clearNopointSound();
            this.soundService.playPointEffect();
        }
        if (! isMultipleOfThreeAndFive) {
            this.pointService.removePoint();
        }
    }
}

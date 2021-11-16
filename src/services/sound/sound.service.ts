import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class SoundService {
    bgSound = new Audio();
    resetSound = new Audio();
    pointSound = new Audio();
    noPointSound = new Audio();

    playbgSound() {
        // const bgSound = new Audio();
        this.bgSound.src = '../assets/Game song.mp3';
        this.bgSound.load();
        this.bgSound.play();
    }
    stopbgSound() {
        this.bgSound.pause();
    }

    playResetSound() {
        this.resetSound.src = '../assets/Reset.mp3';
        this.resetSound.load();
        this.resetSound.play();
    }
    playNoPointSound() {
        this.noPointSound.src = '../assets/noPoint.mp3';
        this.noPointSound.load();
        this.noPointSound.play();
    }
    clearNopointSound() {
        this.noPointSound.pause();
    }
    pointEffect() {
        this.pointSound.src = '../assets/Point.mp3';
    }
    playPointEffect() {
        this.pointSound.src = '../assets/Point.mp3';
        this.pointSound.load();
        this.pointSound.play();
    }
    clearPointSound() {
        this.pointSound.pause();
    }
}

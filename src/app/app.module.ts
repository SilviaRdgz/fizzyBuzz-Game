import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterService } from '../services/counter/counter.service';
import { PointService } from '../services/points/point.service';
import { SoundService } from '../services/sound/sound.service';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
    ],
    providers: [SoundService, CounterService, PointService],
    bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AutoAnimateModule } from '@formkit/auto-animate/angular'
import { SwiperModule } from 'swiper/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    AutoAnimateModule,
    AppRoutingModule,
    SwiperModule,
  
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

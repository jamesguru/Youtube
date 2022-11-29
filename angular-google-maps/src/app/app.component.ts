
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import SwiperCore, { Keyboard, Pagination, Navigation, Virtual } from 'swiper';

SwiperCore.use([Keyboard, Pagination, Navigation, Virtual]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {

  slides$ = new BehaviorSubject<string[]>(['']);
  slides=[


    {
      title:"Jane Doe",
      img:"https://cdn.pixabay.com/photo/2017/01/29/21/16/nurse-2019420_960_720.jpg"
    },

    {
      title:"James Doe",
      img:"https://cdn.pixabay.com/photo/2016/02/08/23/36/isolated-1188036__340.png"
    },
    {
      title:"Linsley Doe",
      img:"https://cdn.pixabay.com/photo/2016/02/08/23/36/isolated-1188036__340.png"
    },
    {
      title:"Mary Doe",
      img:"https://cdn.pixabay.com/photo/2013/11/28/10/04/experiment-220023__340.jpg"
    },
    {
      title:"James Doe",
      img:"https://cdn.pixabay.com/photo/2016/02/08/23/36/isolated-1188036__340.png"
    }
  ]

  constructor() {}

  ngOnInit(): void {
    // target element  <div class="tw"></div>
  }

}
import { Component, OnInit } from '@angular/core';
import { faPhone,faArrowRight } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  faPhone = faPhone;
  faArrowRight= faArrowRight;

  constructor() { }

  ngOnInit(): void {
  }

}

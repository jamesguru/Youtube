import { Component, OnInit } from '@angular/core';
import { faHome,faUser,faHospital,faAd,faDotCircle,faSignInAlt } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  home=faHome;
  user=faUser;
  hospital=faHospital;
  add=faAd;
  block=faDotCircle;
  logout=faSignInAlt;

}

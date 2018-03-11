import { Component, OnInit } from '@angular/core';
import { UserService } from './../../user.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  myName: string;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.name.subscribe(s => this.myName = s);
  }

}

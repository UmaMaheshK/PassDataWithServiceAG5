import { UserService } from './../../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  myName: string;
  userName: string;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.name.subscribe(s => this.myName = s);
  }
  changeUserName() {
    this.userService.Name = this.userName;
  }
}

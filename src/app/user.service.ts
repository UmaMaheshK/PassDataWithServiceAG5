import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

@Injectable()
export class UserService {
  private myName = new BehaviorSubject<string>("Uma Mahesh");
  name = this.myName.asObservable();

  constructor() { }

  set Name(name: string) {    
    this.myName.next(name);
  }

}
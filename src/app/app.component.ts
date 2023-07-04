import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, DoCheck{
  user = {name: "", status: "", avatar: ""};

  addUser(newUser: any){
    this.user.name = newUser.name,
    this.user.status = newUser.status,
    this.user.avatar = newUser.avatar
  }

  charsetAmount = 0;
  ngOnInit(){
    this.charsetAmount = this.user.status.length
  }
  ngDoCheck(){
    if (this.user.status.length > 50){
      this.user.status = this.user.status.slice(0, 50);
    }
    this.charsetAmount = this.user.status.length
  }
}

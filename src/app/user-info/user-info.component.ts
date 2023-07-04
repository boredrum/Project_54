import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent {
  @Input() name="";
  @Input() status="";
  @Input() avatar="";
  @Input() charsetAmount = 0;

  removeUser(){
    this.name = "";
    this.status = "";
    this.avatar = "";
    this.charsetAmount = this.status.length;
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataTransmissionService } from '../services/data-transmission.service';
import { UserModel } from '../user.model';

@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.css']
})
export class SiblingComponent implements OnInit {
  message: string;
  myForm: FormGroup = new FormGroup({
    inputCtrl: new FormControl('')
  });
  constructor(
    private dataService: DataTransmissionService
  ) { }

  ngOnInit(): void {
    this.dataService.currentMessage.subscribe(x => this.message = x);
  }
  onClick(): void {
    // this.dataService.changeMessage(this.myForm.controls.inputCtrl.value);


    // const data: UserModel = new UserModel();
    // data.fullname = 'Tạ Đăng Hào';
    // data.number = 10;
    // data.scope = '/Hà Nội/Bắc Từ Liêm/Thụy Phương';
    // data.status = '5';
    // this.dataService.createData(data).subscribe(x => {
    //   console.log(x);
    // });
  }
}

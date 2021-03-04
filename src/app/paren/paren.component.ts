import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DataTransmissionService } from '../services/data-transmission.service';
import { UserModel } from './../user.model';

@Component({
  selector: 'app-paren',
  templateUrl: './paren.component.html',
  styleUrls: ['./paren.component.css']
})
export class ParenComponent implements OnInit, AfterViewInit {
  parenMessage: string;
  userId: string;
  secretToken: string;
  fid: string;
  listNewProfile: any[];
  classifyCutomer: string;
  constructor(
    private dataService: DataTransmissionService,
  ) { }
  ngOnInit(): void {
    this.dataService.currentMessage.subscribe(x => {
      this.parenMessage = x;
    });
  }
  ngAfterViewInit(): void {
    this.getAllData();
  }
  getAllData(): void {
    this.dataService.getData().subscribe(x => {
      this.listNewProfile = x.list_new_profile;
      console.log(this.listNewProfile);
    });
  }

}

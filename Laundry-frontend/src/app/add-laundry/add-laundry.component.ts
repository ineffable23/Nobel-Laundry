import { Component, OnInit } from '@angular/core';
import { Laundry } from 'src/app/models/laundry.model';
import { LaundryService } from 'src/app/_services/laundry.service';
@Component({
  selector: 'app-add-laundry',
  templateUrl: './add-laundry.component.html',
  styleUrls: ['./add-laundry.component.css']
})
export class AddLaundryComponent implements OnInit {
  laundry: Laundry = {
    username: '',
    clothType: '',
    clothFabric: '',
    clothColor: '',
    washed: false
  };
  submitted = false;
  constructor(private laundryService: LaundryService) { }
  ngOnInit(): void {
  }
  saveLaundry(): void {
    const data = {
      username: this.laundry.username,
      clothType: this.laundry.clothType,
      clothFabric: this.laundry.clothFabric,
      clothColor: this.laundry.clothColor
    };
    this.laundryService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }
  newLaundry(): void {
    this.submitted = false;
    this.laundry = {
      username: '',
      clothType: '',
      clothFabric: '',
      clothColor: '',
      washed: false
    };
  }
}
import { Component, OnInit } from '@angular/core';
import { Laundry } from 'src/app/models/laundry.model';
import { LaundryService } from 'src/app/_services/laundry.service';
@Component({
  selector: 'app-laundrys-list',
  templateUrl: './laundrys-list.component.html',
  styleUrls: ['./laundrys-list.component.css']
})
export class LaundrysListComponent implements OnInit {
  laundrys?: Laundry[];
  currentLaundry: Laundry = {};
  currentIndex = -1;
  username = '';
  constructor(private laundryService: LaundryService) { }
  ngOnInit(): void {
    this.retrieveLaundrys();
  }
  retrieveLaundrys(): void {
    this.laundryService.getAll()
      .subscribe(
        data => {
          this.laundrys = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  refreshList(): void {
    this.retrieveLaundrys();
    this.currentLaundry = {};
    this.currentIndex = -1;
  }
  setActiveLaundry(laundry: Laundry, index: number): void {
    this.currentLaundry = laundry;
    this.currentIndex = index;
  }
  removeAllLaundrys(): void {
    this.laundryService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }
  searchUsername(): void {
    this.currentLaundry = {};
    this.currentIndex = -1;
    this.laundryService.findByUsername(this.username)
      .subscribe(
        data => {
          this.laundrys = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
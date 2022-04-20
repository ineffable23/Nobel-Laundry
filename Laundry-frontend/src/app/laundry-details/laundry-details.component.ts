import { Component, OnInit } from '@angular/core';
import { LaundryService } from 'src/app/_services/laundry.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Laundry } from 'src/app/models/laundry.model';
@Component({
  selector: 'app-laundry-details',
  templateUrl: './laundry-details.component.html',
  styleUrls: ['./laundry-details.component.css']
})
export class LaundryDetailsComponent implements OnInit {
  currentLaundry: Laundry = {
    username: '',
    clothType: '',
    clothFabric: '',
    clothColor: '',
    washed: false
  };
  message = '';
  constructor(
    private laundryService: LaundryService,
    private route: ActivatedRoute,
    private router: Router) { }
  ngOnInit(): void {
    this.message = '';
    this.getLaundry(this.route.snapshot.params['id']);
  }
  getLaundry(id: string): void {
    this.laundryService.get(id)
      .subscribe(
        data => {
          this.currentLaundry = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  updateWashed(status: boolean): void {
    const data = {
      username: this.currentLaundry.username,
      ClothType: this.currentLaundry.clothType,
      ClothFabric: this.currentLaundry.clothFabric,
      ClothColor: this.currentLaundry.clothColor,
      washed: status
    };
    this.message = '';
    this.laundryService.update(this.currentLaundry.id, data)
      .subscribe(
        response => {
          this.currentLaundry.washed = status;
          console.log(response);
          this.message = response.message ? response.message : 'The status was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }
  updateLaundry(): void {
    this.message = '';
    this.laundryService.update(this.currentLaundry.id, this.currentLaundry)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ? response.message : 'This order was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }
  deleteLaundry(): void {
    this.laundryService.delete(this.currentLaundry.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/laundrys']);
        },
        error => {
          console.log(error);
        });
  }
}
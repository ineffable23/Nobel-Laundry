import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent implements OnInit {
  content?: string;
  constructor(private userService: UserService) { }
  ngOnInit(): void {
    this.userService.getModeratorBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }

   Showprogressbar()  
  {  
    this.Showprogress(); this.timer();  
  }  
  progress = 0;  
 Showprogress()  
 {  
 this.progress = 0;  
   setInterval(() => this.ProgressBar(), 6000000)  // 6000000*1.5 = 9000000 = 150 minutes
   }  
  
 ProgressBar() {  
   
   if (this.progress == 0) {  
     this.progress = this.progress + 1.5  
   } else {  
     this.progress = this.progress + 1.5;  
     if (this.progress = this.progress + 1.5) {  
       this.progress == this.progress + 1.5;  
       if (this.progress >= 100) {  
         this.progress = 100;  
       }  
     }  
   }  
 }  
  timer()  
  {  
    var timeleft = 1;  
    var downloadTimer = setInterval(() =>{  
      if (timeleft <= 0) {  
        clearInterval(downloadTimer); this.progress = 0;  
  
      } else {  
         // @ts-ignore: Object is possibly 'null'.
        document.getElementById("countdown").innerHTML = timeleft + "";  
      }  
      timeleft -= 1;      
    }, 1000);  
    setInterval(() => clearInterval(downloadTimer), 1000)    
  } 
  
}

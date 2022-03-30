import { formatDate } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: 'students',
  template: ` <h2>{{getTitle()}}
              <br/>
              {{getCurrentDate()}}</h2>`
})
export class StudentsComponent {

  title = "My List of Students";

  getTitle() {
    return this.title;
  }

  getCurrentDate(){
    let date = new Date(Date.now());
    return date
  }

}

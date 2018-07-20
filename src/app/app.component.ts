import { Component } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  profileForm: FormGroup

  constructor(){
    this.profileForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl('')
    })
  }
}

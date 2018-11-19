import { EnrollmentService } from './enrollment.service';
import { Address } from './address';
import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['Angular', 'React', 'VueJS'];
  userTopcicHasError = true;
  userAddress = new Address('18, The Moornings, Fitzwilliam Quay', 'Co Dublin', 'D04FR60');
  userModel = new User('Raji Sundararajan', 'rajashreesundar@gmail.com', 353879511021, this.userAddress, 'default', 'morning', true);
  submitted = false;
  messageFromExpressServer = '';
  errorMessage = '';
  constructor(private _enrollmentService: EnrollmentService) {}

  validateTopic(value) {
    if (value === 'default') {
      this.userTopcicHasError = true;
    } else {
      this.userTopcicHasError = false;
    }
  }

  onSubmit() {
    // console.log(this.userModel);
    this._enrollmentService.enroll(this.userModel)
      .subscribe(
        data =>  this.setSuccessMessage(data.message), // this.messageFromExpressServer = data,
        error => this.errorMessage = error.statusText);
  }

  setSuccessMessage(message: string) {
    this.submitted = true;
    this.messageFromExpressServer = message;
  }
}

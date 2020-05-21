import { Component } from '@angular/core';
import { JobsService } from './services/jobs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jobs';


  constructor(private jobsService: JobsService) {
    this.jobsService.getUsajobs().subscribe( (resp: any) => {
      console.log('USAJOBS: ', resp);
    });
    this.jobsService.getTheMuse().subscribe( resp => {
      console.log('THEMUSE: ', resp);
    });
    this.jobsService.getJuju().subscribe( resp => {
      console.log('JUJU: ', resp);
    });
    this.jobsService.getAdzuna().subscribe( resp => {
      console.log('ADZUNA: ', resp);
    });
    this.jobsService.getWorksmobile().subscribe( resp => {
      console.log('WORKSMOBILE: ', resp);
    });
  }
}

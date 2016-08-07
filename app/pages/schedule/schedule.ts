import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';
import {ScheduleProvider} from '../../provider/schedule-provider';

@Component({
  templateUrl: 'build/pages/schedule/schedule.html',
})
export class SchedulePage {

  schedule: Array<any> = [];

  constructor(private nav: NavController, private scheduleProvider: ScheduleProvider) {
  
  }

  ionViewLoaded()  {
    this.loadSchedule();

  }

  loadSchedule() {
    this.schedule = this.scheduleProvider.Obj.schedule;
  }

}

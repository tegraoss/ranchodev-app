import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Tabs, Tab } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { MapPage } from '../map/map';
import { SchedulePage } from '../schedule/schedule'

@Component({
  templateUrl: 'build/pages/tabs/tabs.html',
})
export class TabsPage {

  @ViewChild('scheduleTab') scheduleTab: Tab;
  @ViewChild('aboutTab') aboutTab: Tab;
  @ViewChild('mapTab') mapTab: Tab;

  tab1Root: any 
  tab2Root: any
  tab3Root: any 
  
  constructor(navParams: NavParams) {
    this.tab1Root = SchedulePage;
    this.tab2Root = AboutPage;
    this.tab3Root = MapPage;
  }

}


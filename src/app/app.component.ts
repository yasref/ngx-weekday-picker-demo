import { WeekDay } from '@angular/common';
import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  options = {
    weekStart: WeekDay.Saturday,
    inactiveColor: '#f2f2f2',
    inactiveBgColor: '#2a2a2a',
    inactiveBorderColor: '#000',
    daysNames: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    selected: [WeekDay.Saturday, WeekDay.Sunday],
  };
  options1 = { 
    weekStart: WeekDay.Saturday,
    activeBgColor:'#e91e63',
    activeBorderColor:'#e91e63',
    inactiveColor: '#f2f2f2',
    inactiveBgColor: '#2a2a2a',
    inactiveBorderColor: '#000',
    daysNames: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    selected: [WeekDay.Saturday, WeekDay.Sunday],
  };
}

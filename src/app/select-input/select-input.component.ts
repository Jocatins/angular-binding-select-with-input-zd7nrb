import { Component, OnInit } from '@angular/core';
import { SelectWInputComponent } from './select-w-input/select-w-input.component';

@Component({
  selector: 'cu-select-input',
  templateUrl: './select-input.component.html'
})
export class SelectInputComponent implements OnInit {

  cuGroups = [
    { id: 0, name: 'Group 1' },
    { id: 1, name: 'Group 2' },
    { id: 2, name: 'Group 3' }
  ];

  plHolder = 'Choose/Create Group';
  plHolderInput = 'Enter New Group';

  constructor() { }

  ngOnInit() {

  }

  /** ADD */
  add (newValue: string): void {
    newValue = newValue.trim();
    if (!newValue) { return; }
    let count = this.cuGroups.length,
      inc = ++count;
    this.cuGroups.push({ id: inc, name: newValue });
  }

  /** DELETE */
  delete (id: any): void {
    if (this.cuGroups.length > 1) {
      this.cuGroups = this.cuGroups.filter(item => item.id !== id);
    } else {
      alert('You can not delete all groups.');
    }
  }

  focus (e): void {
    // TODO: Need to stop Material's select options from collapsing on tab
    console.log('TODO: Need to stop Material\'s select options from collapsing on tab')
  }

}

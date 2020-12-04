import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'cu-select-w-input',
  templateUrl: './select-w-input.component.html',
  styleUrls: ['./select-w-input.component.scss']
})

export class SelectWInputComponent implements OnInit {

  @Input() dataList; 
  @Input() placeholderText;
  @Input() placeholderInputText;

  @Output() onAdd = new EventEmitter();
  @Output() onDelete = new EventEmitter();
  @Output() onFocus = new EventEmitter();

  constructor () {}

  ngOnInit () {}

  fireAddEvent (newItem: any) {
    this.onAdd.emit(newItem);
  }

  fireDeleteEvent (deleteItem: any) {
    this.onDelete.emit(deleteItem)
  }
  
  fireFocusEvent (e) {
    this.onFocus.emit(e)
  }
}
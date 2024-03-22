import {Component, EventEmitter, Input, Output} from '@angular/core';
import {SearchOperator} from "../../store/model";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss']
})
export class SearchFieldComponent {
  @Input() label : string = "";
  @Input() type: string = "";
  @Input() inputFormControl = new FormControl("");
  @Input() selectFormControl = new FormControl(null,
    [Validators.required]
  );

  operators: SearchOperator[] = [
    {name: "Equal", value: "equal"},
    {name: "Not Equal", value: "notEqual"},
    {name: "Greater Than", value: "greaterThan"},
    {name: "Greater Than Or Equal", value: "greaterThanOrEqual"},
    {name: "Less Than", value: "lessThan"},
    {name: "Less Than Or Equal", value: "lessThanOrEqual"},
    {name: "Like", value: "like"},
  ]
}

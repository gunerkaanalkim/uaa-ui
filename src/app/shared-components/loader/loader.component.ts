import {Component, Input, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {selectLoaderState} from "../../store/project.selector";

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  @Input() isVisible : boolean = false;

  constructor(
    private readonly store: Store
  ) {
  }

  ngOnInit(): void {
    this.selectLoaderState();
  }

  private selectLoaderState() {
    this.store.select(selectLoaderState)
      .subscribe(isLoaderVisible=>{
        this.isVisible = isLoaderVisible;
      })
  }
}

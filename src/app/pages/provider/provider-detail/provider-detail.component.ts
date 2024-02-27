import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-provider-detail',
  templateUrl: './provider-detail.component.html',
  styleUrls: ['./provider-detail.component.scss']
})
export class ProviderDetailComponent implements OnInit {
  providerAlias: string = '';

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.providerAlias = params['providerAlias'];
    });
  }

}

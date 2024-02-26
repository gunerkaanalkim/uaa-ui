import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-list-provider',
  templateUrl: './list-provider.component.html',
  styleUrls: ['./list-provider.component.scss']
})
export class ListProviderComponent {
  constructor(private route: ActivatedRoute,
              private router: Router) {
    this.route.params.subscribe(params => {
      const shopID = params['shopID'];

      console.log(shopID)
    });
  }

}

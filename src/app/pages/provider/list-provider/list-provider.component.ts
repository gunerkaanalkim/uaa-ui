import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProviderService} from "../../../services/provider.service";

@Component({
  selector: 'app-list-provider',
  templateUrl: './list-provider.component.html',
  styleUrls: ['./list-provider.component.scss']
})
export class ListProviderComponent implements OnInit {
  shopId: number = 0;

  constructor(private readonly route: ActivatedRoute,
              private readonly router: Router,
              private readonly providerService: ProviderService
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.shopId = params['shopID'];
    });


    this.getAllProviders();
  }

  getAllProviders() {
    this.providerService
      .getAll()
      .subscribe(providers=>{
        console.log(providers)
      })
  }
}

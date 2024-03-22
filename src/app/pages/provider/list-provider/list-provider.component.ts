import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProviderService} from "../../../services/provider.service";
import {Provider} from "../../../store/model";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-list-provider',
  templateUrl: './list-provider.component.html',
  styleUrls: ['./list-provider.component.scss']
})
export class ListProviderComponent implements OnInit {
  shopId: number = 0;
  providers: Provider[] = [];

  constructor(private readonly route: ActivatedRoute,
              private readonly router: Router,
              private readonly providerService: ProviderService,
              private spinner: NgxSpinnerService
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.shopId = params['shopID'];
    });

    this.getAllProviders();
  }

  getAllProviders() {
    this.spinner.show();

    this.providerService
      .getAllWithoutPage()
      .subscribe(providers=>{
        this.providers = providers;
        this.spinner.hide();
      })
  }

  onNavigateToProviderDetails(providerAlias: string) {
    this.router.navigate(['provider/detail', {providerAlias: providerAlias, shopId: this.shopId}])
  }
}

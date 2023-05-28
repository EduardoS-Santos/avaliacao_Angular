import { Component, OnInit } from '@angular/core';
import { OrderSiteService } from 'src/app/servico/order-site.service';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css'],
})
export class SobreComponent implements OnInit {
  sobreDb: any = [];
  constructor(private orderSiteService: OrderSiteService) {}
  ngOnInit(): void {
    this.sobreDb = this.orderSiteService.sobreDetails;
  }
}

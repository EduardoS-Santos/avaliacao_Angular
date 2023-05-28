import { Component, OnInit } from '@angular/core';
import { OrderSiteService } from 'src/app/servico/order-site.service';

@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.component.html',
  styleUrls: ['./inicial.component.css'],
})
export class InicialComponent implements OnInit {
  dbGames: any = [];
  constructor(private orderSiteService: OrderSiteService) {}
  ngOnInit(): void {
    this.dbGames = this.orderSiteService.varDatails;
  }
}

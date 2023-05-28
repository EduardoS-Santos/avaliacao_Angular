import { Component, OnInit } from '@angular/core';
import { OrderSiteService } from 'src/app/servico/order-site.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css'],
})
export class ContatoComponent implements OnInit {
  dbComentarios: any = [];
  constructor(private orderSiteService: OrderSiteService) {}
  ngOnInit(): void {
    this.dbComentarios = this.orderSiteService.chatDb;
  }
  public user: string = '';
  public comentariosU: string = '';

  public addComment(username: string, comentarios: string) {
    this.dbComentarios.push({
      nameUser: username,
      comentario: comentarios,
    });
  }
}

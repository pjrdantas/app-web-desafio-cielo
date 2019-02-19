import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExtratoService } from '../../services/extrato.service';
import { Extrato } from '../../services/extrato';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  private extratos: Extrato[] = new Array();

  constructor(private extratoService: ExtratoService, private router: Router) { }

  ngOnInit() {

    this.extratoService.getExtratos().subscribe(res => this.extratos = res);
  }

}

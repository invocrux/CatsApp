import { Component, OnInit } from '@angular/core';
import { CatAppService } from './service/cat-app.service';
import { CatAPI } from './interface/interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  data: CatAPI[] = []
  constructor(private readonly service: CatAppService) {}
  ngOnInit(): void {
    this.service.getDataApi().subscribe(e => this.data = e )
  }

}

import { Component, OnInit } from '@angular/core';
import { CatAppService } from './service/cat-app.service';
import { CatAPI } from './interface/interface';
import { Observable, forkJoin } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  cats: CatAPI[] = []
  imagesObservables: { [key: string]: Observable<any> } = {}
  images: { [x: string]: any; } = {};
  constructor(private readonly service: CatAppService) {}
  ngOnInit(): void {
    this.getCats()
  }

  getCats(){

    this.service.getDataApi().subscribe(e => {
      this.cats = e
      this.fillImages()
    })
  }   
  fillImages() {
    this.cats.forEach((cat) => {
      if(!cat.reference_image_id) return
      this.imagesObservables[cat.reference_image_id] = this.service.getImage(cat.reference_image_id)
    })
    forkJoin(this.imagesObservables).subscribe((resp) => this.images = resp)
  }

  getImages(idImage: string | undefined){
    if(!idImage) return '../../assets/cat.png.jpg'
    return this.images[idImage]
  }

}

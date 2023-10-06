import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CatAPI } from '../interface/interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CatAppService {
  headers = {
    'x-api-key': 'bda53789-d59e-46cd-9bc4-2936630fde39'
  }
  constructor(private http: HttpClient) { }

  getDataApi(){
    
    const consulta = 'https://api.thecatapi.com/v1/breeds'
    return this.http.get<CatAPI[]>(consulta, {headers: this.headers})
  }

  getImage(idImage: string){
    const consulta = `https://api.thecatapi.com/v1/images/${idImage}` 
    return this.http.get<any>(consulta, {headers: this.headers}).pipe(map(item => item.url))
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CatAPI } from '../interface/interface';

@Injectable({
  providedIn: 'root'
})
export class CatAppService {

  constructor(private http: HttpClient) { }

  getDataApi(){
    const headers = {
      'x-api-key': 'bda53789-d59e-46cd-9bc4-2936630fde39'
    }
    const consulta = 'https://api.thecatapi.com/v1/breeds'
    return this.http.get<CatAPI[]>(consulta, {headers})
  }
}

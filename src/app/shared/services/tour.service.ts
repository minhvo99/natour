import { HttpClient } from '@angular/common/http';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { map, Observable, tap } from 'rxjs';
import { environment } from '@env/environment.development';

@Injectable({
  providedIn: 'root'
})
export class TourService {

  readonly BASE_URL = environment.apiUrl
  private platformId = inject(PLATFORM_ID);

  private http = inject(HttpClient);

  

  getAllTours(): Observable<any[]> {
    const url = `${this.BASE_URL}/tour`;
    
    return this.http.get<any[]>(url).pipe(
      map((res: any) => res.data)
    )
  }

  getTopTourStats(): Observable<any[]> {
    const url = `${this.BASE_URL}/tour/tour-stast`;
    
    return this.http.get<any[]>(url).pipe(
      map((res: any) => res.data)
    )
  }

  getTourCheap(): Observable<any[]> {
    const url = `${this.BASE_URL}/tour/top-5-cheap`;
    
    return this.http.get<any[]>(url).pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }

  getTourById(id:string): Observable<any> {
    const url = `${this.BASE_URL}/tour/${id}`;
    
    return this.http.get<any>(url).pipe(
      map((res: any) => res.data)
    )
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LoggingService } from './logging.service';
import { Movie } from './movie';
import { Movies } from './movie.datasource';

@Injectable({
  providedIn: 'root'//intejtable olması uygulamanın root modülü üzerinden app modülünden movies service istediğim noktadan ulaşacağımı söylüyor
})
export class MovieService {
  private apiMoviesUrl='api/moviesss';
  constructor(private loggingService:LoggingService, private http: HttpClient) { }

  getMovies():Observable<Movie[]>{
    this.loggingService.add('MovieService: Listing movies');
    // return of(Movies);
    return this.http.get<Movie[]>(this.apiMoviesUrl);
  }

  getMovieById(id):Observable<Movie>{
    this.loggingService.add('MovieService:Get Movie Detail nBy Id='+id);//her sorgu attığımızda loglasın
    // return of(Movies.find(movie=>movie.id===id));//Movies'in içinde findle ara neye göre movienin id si dışarıdan gelen idye eşitse
    return this.http.get<Movie>(this.apiMoviesUrl+'/'+id);

  }

}


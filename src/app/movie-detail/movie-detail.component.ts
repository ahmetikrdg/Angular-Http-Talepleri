import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  @Input() movie:Movie;//movies.componente gider [movie]="selectedMovie" 'e eşitse gösterilir. Parametrenin gelmesi için input decarationu beklememiz lazım oda @Input
  constructor(private movieService:MovieService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getMovieId();
  }

  getMovieId():void{
    const id=+this.route.snapshot.paramMap.get('id');//route üzerindeki id parametresine ulaştım
    this.movieService.getMovieById(id).subscribe(movie=>this.movie=movie);
  }
}

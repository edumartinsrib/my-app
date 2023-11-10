import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { JokeApiService } from './joke-api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <h1>Generator</h1>
    <button (click)="getJoke()">Get Joke</button>
    <p>{{ joke }}</p>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';
  joke: any;

  constructor(private jokeApiService: JokeApiService) {}

  getJoke() {
    this.jokeApiService
      .getRandomJoke()
      .then((response: any) => {
        this.joke = `CEP: ${response['data']['cep'] || 0}`;
      })
      .catch((error) => {
        this.joke = error.stack || 0;
        console.log(error);
      });
  }
}

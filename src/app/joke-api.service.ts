import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class JokeApiService {
  constructor() {}

  async getRandomJoke() {
    const urlTeste = "https://localhost:8181/cmcontrol-war/rest/oauth2/login"
    let config = {
      method: 'post',
      url: urlTeste,
      headers: {
        'Authorization': 'Basic Y21jb250cm9sOndpemUyMDEz'
      }
    };

    const data = axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });

    return data;
  }
}

import axios from 'axios';

import { PROXY, SEARCH_API_URL, API_KEY } from './../config';

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResult() {
    // enables cross-origin

    try {
      const res = await axios.get(
        `${PROXY}${SEARCH_API_URL}?key=${API_KEY}&q=${this.query}`
      );
      this.result = res.data.recipes;
      //   console.log('## search result:', this.result);
    } catch (err) {
      console.error(err);
    }
  }
}

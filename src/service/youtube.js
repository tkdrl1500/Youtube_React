import axios from 'axios';

class Youtube {
  constructor(key) {
    this.youtube = axios.create({
      baseURL: 'https://youtube.googleapis.com/youtube/v3',
      params: {
        key,
        part: 'snippet',
        maxResults: 25,
      },
    });
  }
  async search(query) {
    const response = await this.youtube.get('videos', {
      params: {
        q: `${query}`,
        type: 'video',
      },
    });
    return response.data.items;
  }

  async mostPopular() {
    const response = await this.youtube.get('videos', {
      params: {
        chart: 'mostpopular',
      },
    });
    return response.data.items;
  }
}

export default Youtube;

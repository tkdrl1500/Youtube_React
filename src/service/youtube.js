class Youtube {
  constructor(httpClient) {
    this.youtube = httpClient;
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

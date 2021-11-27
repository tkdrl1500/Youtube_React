class Youtube {
  constructor(key) {
    this.key = key;
    this.getRequestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
  }
  async search(query) {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`,
      this.getRequestOptions
    );
    const result_1 = await response.json();
    return result_1.items.map((item) => ({ ...item, id: item.id.videoId }));
  }

  async mostPopular() {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&maxResults=25&chart=mostpopular&key=${this.key}`,
      this.getRequestOptions
    );
    const result_1 = await response.json();
    return result_1.items;
  }
}

export default Youtube;

import { useEffect, useState } from 'react';
import styles from './app.module.css';
import SearchBar from './components/searchBar/searchBar';
import VideoList from './components/video_list/video_list';

function App() {
  const [videos, setVideos] = useState([]);
  const onSearch = (query) => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=AIzaSyAJpYdpeaxtwoC85cHy8-n4h2qNS4zv3TQ`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) =>
        result.items.map((item) => ({ ...item, id: item.id.videoId }))
      )
      .then((items) => setVideos(items))
      .catch((error) => console.log('error', error));
  };

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&maxResults=25&chart=mostpopular&key=AIzaSyAJpYdpeaxtwoC85cHy8-n4h2qNS4zv3TQ',
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log('error', error));
  }, []);
  return (
    <div className={styles.app}>
      <SearchBar onSearch={onSearch} />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;

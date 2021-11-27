import { useEffect, useState } from 'react';
import styles from './app.module.css';
import SearchBar from './components/searchBar/searchBar';
import VideoList from './components/video_list/video_list';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const onSearch = (query) => {
    youtube
      .search(query) //
      .then((video) => setVideos(video));
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((video) => setVideos(video));
  }, []);
  return (
    <div className={styles.app}>
      <SearchBar onSearch={onSearch} />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;

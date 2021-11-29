import { useEffect, useState } from 'react';
import styles from './app.module.css';
import SearchBar from './components/searchBar/searchBar';
import VideoDetail from './components/video_detail/video_detail';
import VideoList from './components/video_list/video_list';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

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
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList
            videos={videos}
            onVideoClick={selectVideo}
            display={selectedVideo ? 'list' : 'grid'}
          />
        </div>
      </section>
    </div>
  );
}

export default App;

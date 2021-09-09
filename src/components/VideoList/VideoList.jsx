import css from './VideoList.module.css';
import { VideoItem } from './VideoItem';

export const VideoList = ({ videos, onSelect, selectedVideo }) => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Selected video link: {selectedVideo}</h1>
      <ul className={css.list}>
        {videos.map(item => (
          <li
            key={item.id}
            className={css.item}
            onClick={() => onSelect(item.link)}
          >
            <VideoItem link={item.link} id={item.id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

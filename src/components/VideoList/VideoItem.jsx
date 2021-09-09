import css from './VideoList.module.css';

export const VideoItem = ({ link, id }) => {
  return (
    <div>
      <button type="button" className={css.btn}>
        <span>{id}</span>
        <link rel="stylesheet" href={`${link}`} />
      </button>
    </div>
  );
};

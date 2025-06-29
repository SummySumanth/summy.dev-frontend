import React, { useState } from 'react';
import styles from './SocialLinkChip.module.css';

function SocialLinkChip({ social, onImageLoadCallback }) {
  const { siteName, link, icon } = social;
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
    onImageLoadCallback();
  };

  return (
    <a
      key={siteName}
      className={styles.container}
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      <div className={styles.imageContainer}>
        {!imageLoaded && <div className={styles.shimmer} />}
        <img
          className={`${styles.logo} ${imageLoaded ? styles.loaded : ''}`}
          src={icon}
          alt={siteName}
          onLoad={handleImageLoad}
        />
      </div>
      <div className={styles.siteName}>{siteName}</div>
    </a>
  );
}

export default SocialLinkChip;

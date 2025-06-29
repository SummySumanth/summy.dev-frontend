// Libs
import React, { useState } from 'react';
import classNames from 'classnames';

// Assets
import { ringmeup } from '../../images';

// Configs
import { ENV, API_URL } from '../../configs/configs';

// Tracker
import { trackEvent, EVENT_TYPES } from '../../analytics/tracker';

// Constants
import socialLinks from '../../constants/socialLinks';

// Components
import SocialLinkChip from './components/SocialLinkChip';
import RoundedBtn from '../../components/RoundedBtn/RoundedBtn';

// Styles
import styles from './Contact.module.css';

const Contact = () => {
  const downloadVcard = () => {
    if (ENV === 'production') {
      trackEvent({
        eventName: EVENT_TYPES.DOWNLOAD,
        values: 'VCard',
      });
    }
    window.location.assign(`${API_URL}/api/download/vcard`);
  };

  let numberOfImages = 0;

  const [showContentFlag, setShowContentFlag] = useState(false);

  const incrementLoadedImages = () => {
    numberOfImages++;
    if (numberOfImages === 10) {
      setShowContentFlag(true);
    }
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        <div
          className={classNames(styles.socialLinksContainer, {
            [styles.popInAnimation]: showContentFlag,
          })}
        >
          {socialLinks.map(item => (
            <SocialLinkChip
              key={item.link}
              onImageLoadCallback={incrementLoadedImages}
              social={item}
            />
          ))}
        </div>
        <div className={styles.buttonContainer}>
          <RoundedBtn
            className={classNames(styles.downloadBtn, {
              [styles.popInAnimation]: showContentFlag,
            })}
            ctaText="Download VCard"
            cta={downloadVcard}
          />
          <RoundedBtn
            className={classNames(styles.downloadBtn, {
              [styles.popInAnimation]: showContentFlag,
            })}
            ctaText="Go to Home Page"
            cta={() => {
              window.location.href = '/';
            }}
          />
        </div>
        <div className={styles.imageContainer}>
          <img
            draggable={false}
            className={styles.avatarImg}
            src={ringmeup}
            alt="emoji"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;

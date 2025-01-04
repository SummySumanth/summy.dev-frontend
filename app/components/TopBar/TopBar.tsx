import React from 'react';

// Libs
import { useState } from 'react';
import classNames from 'classnames';

// Components
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';

// Assets
import { Download } from '../../images/svgComponents';

// Styles
import styles from './TopBar.module.css';

interface TopBarProps {
  changeRoute: (route: string) => void;
  showNavbar: boolean;
  downloadResume: () => void;
  currentRoute: string;
}

/**
 * TopBar component
 *
 * @param {function} changeRoute - function to change route
 * @param {boolean} showNavbar - boolean to show navbar
 * @param {function} downloadResume - function to download resume
 * @param {string} currentRoute - current route
 *
 * @returns {ReactNode} TopBar component
 *
 * @example
 * return <TopBar changeRoute={changeRoute} showNavbar={showNavbar} downloadResume={downloadResume} currentRoute={currentRoute} />
 */
const TopBar: React.FC<TopBarProps> = ({
  changeRoute,
  showNavbar,
  downloadResume,
  currentRoute,
}) => {
  const [showNavItems, setShowNavItems] = useState(false);
  return (
    <div
      className={classNames(styles.container, { [styles.show]: showNavbar })}
    >
      <div className={styles.navbarDesktop}>
        <input
          type="checkbox"
          name="toggle-navbar"
          id="toggle-navbar"
          className={styles.navbarToggle}
          checked={showNavItems}
        />
        <label
          htmlFor="toggle-navbar"
          className={styles.toggleLabel}
          onClick={() => {
            setShowNavItems(!showNavItems);
          }}
        >
          <div className={styles.barTop} />
          <div className={styles.barMiddle} />
          <div className={styles.barBottom} />
        </label>
        <input
          type="radio"
          name="nav-tabs"
          defaultChecked={currentRoute === '/' || currentRoute === '/bio'}
          onClick={(e: React.MouseEvent<HTMLInputElement>) => {
            setShowNavItems(false);
            changeRoute(e.currentTarget.value);
          }}
          value="bio"
          className={styles.linkBio}
          id="link-bio"
        />
        <input
          type="radio"
          name="nav-tabs"
          defaultChecked={currentRoute === '/blogs'}
          onClick={(e: React.MouseEvent<HTMLInputElement>) => {
            setShowNavItems(false);
            changeRoute(e.currentTarget.value);
          }}
          value="blogs"
          className={styles.linkBlogs}
          id="link-blogs"
        />
        <input
          type="radio"
          name="nav-tabs"
          defaultChecked={currentRoute === '/projects'}
          onClick={(e: React.MouseEvent<HTMLInputElement>) => {
            setShowNavItems(false);
            changeRoute(e.currentTarget.value);
          }}
          value="projects"
          className={styles.linkProjects}
          id="link-projects"
        />
        <input
          type="radio"
          name="nav-tabs"
          defaultChecked={currentRoute === '/certificates'}
          onClick={(e: React.MouseEvent<HTMLInputElement>) => {
            setShowNavItems(false);
            changeRoute(e.currentTarget.value);
          }}
          value="certificates"
          className={styles.linkCertificates}
          id="link-certificates"
        />
        <input
          type="radio"
          name="nav-tabs"
          defaultChecked={currentRoute === '/techstacks'}
          onClick={(e: React.MouseEvent<HTMLInputElement>) => {
            setShowNavItems(false);
            changeRoute(e.currentTarget.value);
          }}
          value="techstacks"
          className={styles.linkTechstack}
          id="link-techstack"
        />
        <input
          type="radio"
          name="nav-tabs"
          defaultChecked={currentRoute === '/uses'}
          onClick={(e: React.MouseEvent<HTMLInputElement>) => {
            setShowNavItems(false);
            changeRoute(e.currentTarget.value);
          }}
          value="uses"
          className={styles.linkUses}
          id="link-uses"
        />
        <input
          type="radio"
          name="nav-tabs"
          defaultChecked={currentRoute === '/contact'}
          onClick={(e: React.MouseEvent<HTMLInputElement>) => {
            setShowNavItems(false);
            changeRoute(e.currentTarget.value);
          }}
          value="contact"
          className={styles.linkContact}
          id="link-contact"
        />
        <nav id="navItems-container" className={styles.navItemsContainer}>
          <label
            htmlFor="link-bio"
            className={classNames(styles.navItems, styles.navItemBio)}
          >
            Bio
          </label>
          <label
            htmlFor="link-blogs"
            className={classNames(styles.navItems, styles.navItemBlogs)}
          >
            Blogs
          </label>
          {/* <label htmlFor="link-projects" className={classNames(styles.navItems, styles.navItemProjects)}>Projects</label>
          <label htmlFor="link-certificates" className={classNames(styles.navItems, styles.navItemCertificates)}>Certificates</label>
          <label htmlFor="link-techstack" className={classNames(styles.navItems, styles.navItemTechstack)}>Tech</label>
          <label htmlFor="link-uses" className={classNames(styles.navItems, styles.navItemUses)}>Uses</label> */}
          <label
            htmlFor="link-contact"
            className={classNames(styles.navItems, styles.navItemContact)}
          >
            Contact
          </label>
          <div className={styles.slider} />
        </nav>
      </div>

      <div className={styles.navbarActions}>
        <div className={styles.resumeDownloadBtn}>
          {/* <img className="downloadicon" src={downloadSvg} alt="download btn" /> */}
          {/* <DownloadSvg /> */}

          <div className={styles.downloadText} onClick={downloadResume}>
            <div className={styles.downloadicon}>
              <Download />
            </div>
            Download Resume
          </div>
        </div>
        <ThemeSwitcher />
      </div>
    </div>
  );
};
export default TopBar;

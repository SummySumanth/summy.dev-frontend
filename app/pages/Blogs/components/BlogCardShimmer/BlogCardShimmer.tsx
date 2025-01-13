import React from 'react';
import classNames from 'classnames';
import styles from './BlogCardShimmer.module.css';
interface BlogCardShimmerProps {
  count?: number;
}

/**
 * BlogCardShimmer
 * @param {number} count
 * @returns {JSX.Element}
 *
 * @example
 * <BlogCardShimmer count={3} />
 */
const BlogCardShimmer: React.FC<BlogCardShimmerProps> = ({ count = 1 }) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index + 'blogCardShimmer'} className={styles['shimmer-card']}>
          <div className={styles['shimmer-card__image']}>
            <div
              className={classNames(
                styles['shimmer-card__image--inner'],
                styles['shimmer-animation']
              )}
            />
          </div>
          <div className={styles.textContainer}>
            <div className={styles.topLineText}>
              <div
                className={classNames(
                  styles.blogTitle,
                  styles['shimmer-animation']
                )}
              ></div>
              <div
                className={classNames(
                  styles.blogTitle,
                  styles.blogTitleShort,
                  styles['shimmer-animation']
                )}
              ></div>
            </div>
            {
              <div className={styles.categoriesContainer}>
                <div
                  className={classNames(
                    styles.category,
                    styles['shimmer-animation']
                  )}
                ></div>
                <div
                  className={classNames(
                    styles.category,
                    styles['shimmer-animation']
                  )}
                ></div>
                <div
                  className={classNames(
                    styles.category,
                    styles['shimmer-animation']
                  )}
                ></div>
              </div>
            }
          </div>
        </div>
      ))}
    </>
  );
};

export default BlogCardShimmer;

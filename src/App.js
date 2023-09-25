import styles from './App.module.scss';
import heroSectionImage from './images/heroSectionImage.png';
import { ReactComponent as OtterLogo } from './otterLogo.svg';

export default function App() {
  return (
    <>
      <header>
        <nav className={styles.nav}>
          <ul>
            <li>
              <a href="/#">Parents</a>
              <svg
                className={styles.blob}
                width="100%"
                height="100%"
                viewBox="0 0 34 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.54127 7.43938C-1.37846 10.4619 2.25598 18.3642 4.46461 19.6478C8.02481 21.6745 12.1971 22.4246 16.2626 21.769C20.5028 21.1227 33.3538 20.3852 33.9689 15.0138C34.4908 10.6803 28.3029 4.0891 26.2993 2.86916C24.0627 1.51267 15.6755 -0.553935 13.1127 0.137967C10.55 0.82987 2.29326 4.68998 0.54127 7.43938Z"
                  fill="currentColor"
                />
              </svg>
            </li>
            <li>
              <a href="/#">Sitters</a>
              <svg
                className={styles.blob}
                width="100%"
                height="100%"
                viewBox="0 0 34 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.54127 7.43938C-1.37846 10.4619 2.25598 18.3642 4.46461 19.6478C8.02481 21.6745 12.1971 22.4246 16.2626 21.769C20.5028 21.1227 33.3538 20.3852 33.9689 15.0138C34.4908 10.6803 28.3029 4.0891 26.2993 2.86916C24.0627 1.51267 15.6755 -0.553935 13.1127 0.137967C10.55 0.82987 2.29326 4.68998 0.54127 7.43938Z"
                  fill="currentColor"
                />
              </svg>
            </li>
            <li>
              <a href="/#">Trust & Safety</a>
              <svg
                className={styles.blob}
                width="100%"
                height="100%"
                viewBox="0 0 34 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.54127 7.43938C-1.37846 10.4619 2.25598 18.3642 4.46461 19.6478C8.02481 21.6745 12.1971 22.4246 16.2626 21.769C20.5028 21.1227 33.3538 20.3852 33.9689 15.0138C34.4908 10.6803 28.3029 4.0891 26.2993 2.86916C24.0627 1.51267 15.6755 -0.553935 13.1127 0.137967C10.55 0.82987 2.29326 4.68998 0.54127 7.43938Z"
                  fill="currentColor"
                />
              </svg>
            </li>
            <li>
              <a href="/#">Blog</a>
              <svg
                className={styles.blob}
                width="100%"
                height="100%"
                viewBox="0 0 34 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.54127 7.43938C-1.37846 10.4619 2.25598 18.3642 4.46461 19.6478C8.02481 21.6745 12.1971 22.4246 16.2626 21.769C20.5028 21.1227 33.3538 20.3852 33.9689 15.0138C34.4908 10.6803 28.3029 4.0891 26.2993 2.86916C24.0627 1.51267 15.6755 -0.553935 13.1127 0.137967C10.55 0.82987 2.29326 4.68998 0.54127 7.43938Z"
                  fill="currentColor"
                />
              </svg>
            </li>
          </ul>
          <a href="/#">
            <OtterLogo className={styles.logo} />
          </a>
          <div>
            <a href="/#" className={styles.button}>
              Log in
            </a>
            <a href="/#" className={`${styles.whiteButton} ${styles.button}`}>
              Sign up
            </a>
          </div>
        </nav>
      </header>
      <section className={styles.heroSection}>
        <img src={heroSectionImage} alt="colorful children playing" />
        <div>
          <h1>Reliable kidcare on demand</h1>
          <p>
            Otter matches parents who need care with trusted sitters in their
            community, on-demand.
          </p>
          <a href="/#" className={`${styles.lightBlueButton} ${styles.button}`}>
            Sign up
          </a>
        </div>
      </section>
      <section className={styles.playdateSection}>
        <div>
          <img
            src="https://assets.website-files.com/6424ac4b25764708c6aa49f7/64e91905a3b797d51fd1ec64_Playdate.svg"
            alt="kid playing ball with an adult"
          />
        </div>
        <div>
          <span className={styles.highlighted}>Now in beta</span>
          <h2>Introducing Playdates</h2>
          <p>
            Relax and leave the childcare to us. Schedule a playdate with a
            friend and up to three children at no extra cost.
          </p>
          <a href="/#" className={`${styles.whiteButton} ${styles.button}`}>
            Book a Playdate
          </a>
        </div>
      </section>
      <footer className={styles.footer}>
        <div className={styles.footerLeft}>
          <h2>The bright side of kidcare</h2>
          <p>
            Get reliable on demand childcare from vetted sitters in your
            community.
          </p>
          <a href="/#" className={`${styles.lightBlueButton} ${styles.button}`}>
            Get started
          </a>
        </div>
        <div className={styles.footerRight}>
          <div className={styles.footerRightUpperPart}>
            <ul>
              <li>
                <a href="/#">Parents</a>
              </li>
              <li>
                <a href="/#">Sitters</a>
              </li>
              <li>
                <a href="/#">Trust & Safety</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="/#">FAQ</a>
              </li>
              <li>
                <a href="/#">Careers</a>
              </li>
              <li>
                <a href="/#">Blog</a>
              </li>
              <li>
                <a href="/#">Contact</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="/#">Instagram</a>
              </li>
              <li>
                <a href="/#">Facebook</a>
              </li>
              <li>
                <a href="/#">Twitter</a>
              </li>
              <li>
                <a href="/#">LinkedIn</a>
              </li>
            </ul>
          </div>
          <div className={styles.footerRightLowerPart}>
            <div>
              <a href="/#">Terms of use</a>
              <span> ● </span>
              <a href="/#">Privacy Policy</a>
            </div>
            <span>© 2023 With Otter Inc.</span>
          </div>
        </div>
      </footer>
    </>
  );
}

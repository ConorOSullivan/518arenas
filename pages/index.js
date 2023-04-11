import React from 'react';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.blackBox}>
        <h1 className={styles.title}>Blind Tasting Bonanza</h1>
        <div className={styles.description}>
          Where: 518 Arenas
          <br />
          When: 6pm Saturday April 15th
          <br />
          Food: Charcuterie and Dinner
          <br />
          <br />
          As some of the biggest wine snobs I know, you are cordially invited to a night of tasting, guessing, and spitting (jk WE DON’T SPIT) some fantastic and mysterious wines. Each couple will bring a bottle of something you’re not super familiar with but have been curious about. No explicit dollar range here but make it nice. If you bring two buck chuck and we all get conned into picking it as our favorite, instant expulsion from wine club.
          <br />
          <br />
          To do ahead of the party:
          <br />
              - Wrap your bottle in something and cut the top foil away (to keep it anonymous OF COURSE). The cork may be labeled but we’ll just try to ignore that.
              <br />
              - Fill out <a href="https://forms.gle/PrSxN2bUELBsvcaM8" className={styles.hyperlink}>this doc</a>
          <br />
          <br />
          The setup:
          <br />
          - Wines will be poured into labeled carafes, and we’ll note which couple’s wine is in which
          <br />
          - Everyone will have access to the doc which will note all of the wines present
          <br />
          - We drink
          <br />
          - We note
          <br />
          <br />
          We’re going to be judging:
          <br />
          - Match the carafe to the bottle
          <br />
          - Select your favorite wine
          <br />
          - Write your tasting notes. Points if your notes match those in the doc.
          <br />
          <br />
          Winner gets a special bottle. Loser does a wine bong.
        </div>
      </div>
    </div>
  );
};

export default Home;

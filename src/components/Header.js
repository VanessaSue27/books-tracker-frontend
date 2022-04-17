import React from 'react';
import '../styles/Header.css';

export const Header = () => {
  return (
    <header>
      <div className="headerBGImageContainer" />
      <h1 className="headerAppTitle">Books Tracker</h1>
      <p className="headerAppDescription">
        I&apos;ve set a personal resolution to spend more time off-screen and start reading more.
        This app&apos;s goal is to help me keep track of the books I&apos;ve read since 2021 when
        I started with this goal.
      </p>
      <div className="headerTagsWrapper">
        <div className="headerTag">#readmore</div>
        <div className="headerTag">#offscreen</div>
        <div className="headerTag">#bookgoals</div>
      </div>
    </header>
  )
};

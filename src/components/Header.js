import React from 'react';
import '../styles/Header.css';

export const Header = () => {
  return (
    <header>
      <div className="headerBGImageContainer" />
      <h1 className="headerAppTitle">Books Tracker</h1>
      <p className="headerAppDescription">
        On 2021 I set myself a goal of picking up reading again. Mainly as a
        way to spend more time off-screen, but also to reconnect with a hobby
        I had abandoned. While relaxing, reading also feels like a productive
        way of using my time off. This app is to keep track of what I&apos;ve read
        ever since and, of course, keep practicing programming on a fun project.
      </p>
      <div className="headerTagsWrapper">
        <div className="headerTag">#readmore</div>
        <div className="headerTag">#offscreen</div>
        <div className="headerTag">#bookgoals</div>
      </div>
    </header>
  )
};

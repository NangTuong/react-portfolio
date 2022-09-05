import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';
function About() {
  return (
    <section className="my-5">
      <h1 id="about"> About me </h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>
          Hello there and thank you for checking out my portfolio! My name is Bradley Nguyen. I am currently a student attending Vanderbilt University's Online Coding Bootcamp. Upon graduation, I am hoping to land a job in the field and continue to grow as a developer.
        </p>
      </div>
    </section>
  );
}

export default About;

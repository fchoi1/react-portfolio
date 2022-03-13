import React from 'react';
import { Paper } from '@mui/material';

function Resume(props) {
  const { profile } = props;
  return (
    <div>
      <h1>Resume</h1>
      <Paper elevation={10}>
        <h2>{profile.name}</h2>
        <section className="intoduction">
          <h3>Summary</h3>
          <p>
            Id sit dolore qui reprehenderit. Officia sint esse Lorem ex aute
            veniam ex magna aute laboris ex elit nulla. Quis sit in laboris ex
            est sit tempor incididunt velit. Ipsum consectetur laboris do dolore
            laboris esse proident. Exercitation adipisicing occaecat ullamco ut.
          </p>
        </section>
        <section className="experience"></section>

        <section className="education"></section>

        <section className="skills"></section>
      </Paper>
    </div>
  );
}

export default Resume;

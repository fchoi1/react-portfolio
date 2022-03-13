import React from 'react';
import { Avatar } from '@mui/material';
function About({ profile }) {
  return (
    <div>
      <h1>About me</h1>

      <Avatar
        alt={profile.name}
        src={profile.avatar}
        sx={{ width: '10%', height: '10%' }}
      />

      {/* <img src={profile.avatar} alt={profile.file} className="img-thumbnail" /> */}
      <p>
        My name is {profile.name} and this website is to showcase my past
        projects in what I have done in my programming career. Here should be
        some text to describe me right now.
        <br />
        This should be some text that people can read about me and stuff. Right
        now, this is just some text to fill in the area since this is just a
        challenge assignment/project. Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Corrupti veritatis sequi aliquid harum optio. Vero
        fuga odit cum nulla doloremque quibusdam atque, reprehenderit
        perferendis facere officia, aliquid ratione voluptatem optio
      </p>
    </div>
  );
}

export default About;

import React from 'react';
import './resume.css';

function Resume(props) {
  const { profile } = props;
  return (
    <div>
      <h1>Resume</h1>
      <div className="resume">
        <h2>{profile.name}</h2>
        <section className="intoduction">
          <h3>Summary of Qualifications</h3>
          <ul>
            <li>
              Designed and tested robots in a team-based robotics competition
              and computer engineering project showing dedication and reliable
              team work skills
            </li>
            <li>
              Programmed in various languages such as Python, Turing, Java as
              well as using text-based commands
            </li>
            <li>
              Designed various mechanical in graphical design using AutoCAD,
              Photoshop, Word and Excel
            </li>
            <li>
              Balanced extracurricular activities efficiently with school by
              achieving honours throughout high school while school clubs and
              attending Cadets (6 years )
            </li>
            <li>
              Taught junior cadets with strong leadership and responsibility
              teaching various lessons on navigation, aviation, leadership,
              survival and drill to junior cadets with unique course materials
            </li>
            <li>
              Communicated effectively through debate club, and cadets which
              include also demonstrates punctuality, and discipline.
            </li>
          </ul>
        </section>
        <section className="skills">Technical Skills/Projects</section>
        <ul>
          <li>
            Experienced in text based commands and various programming language
            : Python, Java, Turing
          </li>
          <li>
            Experienced in graphic design using AutoCad, NX , Photoshop from
            first year university courses
          </li>
          <li>
            Intermediate understanding of circuit and chips (Logic gates,
            ground, power and other chips)
          </li>
          <li>Other important software (Word, Excel, Powerpoint)</li>
          <li>
            3-Week Assisted Tech Design – Designed using a RC car motor to
            perform various tasks
          </li>
          <li>
            InnoCentive Project – Build and design real complex engineering
            problems outside of the classroom
          </li>
        </ul>
        <section className="education"></section>

        <section className="work"> Work and Relevant Experiences</section>
        <p>
          Robotics Club, High school Club (Sept. 2014 – Oct. 2014) • Designed
          ramps and mechanisms and programed a sumo wrestling robot using NXT
          Lego Mindstorm software • Participated in UOIT robotics competition
          and came in 2nd out of 41 teams Air Cadet Program, 110 Blackhawk
          Squadron, SCARBROUGH, ON (Sept. 2011 – June 2015) • Participated in
          Cadets and dedicated 2 nights each week 3 hours long Regular Training
          Nights • Contacted junior Cadets the day before training night each
          week through phone or e-mail about upcoming events and lessons •
          Taught drill and discipline in a gym as well as aviation, navigation,
          and survival lessons in class • Upheld good uniform standards and
          discipline as well as ensured other cadets upheld standards to
          demonstrate organization and to never pass a fault • Obtained Standard
          First Aid during air cadet summer camp Band • Mentored new band
          members on music as well as drill • Participated in 5 annual band
          competitions as well as played for the Christmas parade, and various
          squadron parades to the public Computer Technician , NCIX, MARKHAM, ON
          (June 2013) • Assisted with assembly of computers (~20) which required
          precise and careful actions • Installed operation systems as well as
          tested/benchmarked on computers to demonstrate knowledge across
          platforms • Listened actively and focused on various store maintenance
          and cleaning (Sweeping floors, cleaning shelves, organizing products)
        </p>
      </div>
      <a
        href="https://download1502.mediafire.com/oavobctjty4g/cqtpi7xvtj102e9/Fabio+Choi+Resume.docx"
        download
      >
        Download Resume
      </a>
    </div>
  );
}

export default Resume;

import React from 'react';

//components
import { Nav } from '../../components/Nav';

class Resume extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <div className="container">
        <Nav />
        <div className="sub__title space__after">
          Resume.
        </div>
        <div className="resume__container regular__text">
          <div className="bold__text smaller__sub__title">
            Systems Development Engineer
          </div>
          <section>
            Amazon Web Services - Intelligence Initiative
          </section>
          <section className="small__italic">
            July 2017 - Present
          </section>
          <br />
          <section>
            <strong>Systems: </strong>
            Working on a team that positions engineers to be government-account facing. Daily operations in handling sensitive data in a secure region while supporting a number of services.
            <br /> <br />
            Created automation to help improve region-build time by 75% .
            Set up metric logging, testing and con guration updates to better improve action latency and operation tracking.
            <br /> <br />
            Continuously communicate with team and customer to create programmatic consistency between government and commercial regions. Report and mitigate bugs during and throughout development process to deploy code in a safe, controlled and tested environment.
          </section>
          <br />
          <section>
            <strong>Development: </strong>
            Daily participation in design, scoping and prioritization of both medium and large projects.
            <br /> <br />
            Communicate directly with UX designers, copy writers and senior engineers to produce a large-scale front-end redesign for a Tier 1 AWS service.
            <br /> <br />
            Regularly adopting service-speci c languages, system tooling and best practices.
          </section>
          <br />
          <hr />
          <br />
          <div className="bold__text smaller__sub__title">
            Cloud Support Engineer
          </div>
          <section>
            Amazon Web Services
          </section>
          <section className="small__italic">
            April 2017 - July 2018
          </section>
          <br />
          <section>
            Worked directly with individual and enterprise customers to remedy architectural challenges, scale projects for success and strategize architectural decisions at the beginning of system adoption.
            <br />
            <br />
            Resolved 60 customer issues, reported and tracked 9 service issues over the course of 90 days
          </section>
          <br />
          <hr />
          <br />
          <div className="bold__text smaller__sub__title">
            Freelance Graphic Designer
          </div>
          <section className="small__italic">
            2013 - Present
          </section>
          <br />
          <section>
            Specializing in typography, layout design and branding. Working with magazines and small businesses to create synchronized design standards from logo development to collateral design.
          </section>
        </div>
      </div>
    );
  }
}

export default Resume;

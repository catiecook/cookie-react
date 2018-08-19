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
        <div className="title">
          Work.
        </div>
        <div className="regular__text">
          <div className="small__caps bold__text smaller__sub__title">
            Amazon Web Services
          </div>
          <section className="small__italic">
            April 2017 - Current
          </section>
          <section>
            Systems Development Engineer
          </section>
          <section>
            Maintain and imporve internal services with automation, systems and operational engineering and use of continuous deployment with full test coverage.
          </section>
          <section>
            Assist in projects medium to large scale, working with customer and internal management to deliver quick results with optimal through-put.
          </section>
        </div>

        <br />

        <div className="regular__text">
          <div className="small__caps bold__text smaller__sub__title">
            Freelance
          </div>
          <section>
            Graphic Designer
          </section>
          <section className="small__italic">
            2013-2017
          </section>
          <section>
            Specialized in layout design, typography/typesetting, and integration of branding across media platforms. Worked with customers to create uniuque identities and dsign standards that fit their business needs.
          </section>
        </div>
      </div>
    );
  }
}

export default Resume;

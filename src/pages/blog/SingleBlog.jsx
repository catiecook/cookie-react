import React from 'react';
import { Link } from 'react-router-dom';

import '../../App.css';
import './style.css';
import {Nav} from '../../components/Nav';

// Media import
import Goat from '../../images/goat.jpg';

class SingleBlog extends React.Component {
  render() {
    return (
      <div className="container">
        <Nav />
        <div className="title">
          Everyone can code.
        </div>
        <div className="title__text">
          <p className="regular__italic">Here's the thing you guys. I'm a college dropout, sort of. If I can learn to code, so can you.</p>
        </div>
        <div className="img__container">
          <img src={Goat} />
        </div>
        <p className="post__body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu erat in purus sollicitudin malesuada. Pellentesque pretium eget urna eu tristique. Sed faucibus eget mi sit amet efficitur. Ut cursus dolor vel ligula placerat lacinia. Donec fringilla eu erat aliquet viverra. Donec porta nunc id sapien varius convallis. Donec tempus eros et quam dignissim, ac eleifend elit gravida. Nunc egestas ultrices lorem at consequat. Maecenas sed fringilla nisl.
          <br /><br />
          Integer eros quam, ultrices nec nisi nec, volutpat porttitor elit. Mauris condimentum convallis orci eu aliquet. Sed convallis dui leo, sit amet tempus lorem suscipit mollis. Nunc in ex et diam sagittis tempus sed nec nisi. Ut sit amet sem aliquet arcu consectetur tristique. Cras efficitur arcu quam, tristique ullamcorper neque luctus ut. Nam feugiat, odio et imperdiet sagittis, leo velit auctor magna, eget bibendum lectus diam sed diam. In hac habitasse platea dictumst. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam lobortis in nunc eu tempus. Nunc vitae ipsum facilisis, hendrerit risus id, facilisis augue.
          <br /><br />
          Vestibulum maximus auctor turpis, cursus vulputate justo efficitur non. Etiam enim metus, bibendum quis urna eget, consectetur hendrerit ex. Aliquam aliquet sollicitudin mauris, sodales porttitor lorem tincidunt tincidunt. Nulla ornare risus id varius feugiat. Fusce dapibus condimentum ipsum id auctor. Aliquam ut magna viverra, ornare nisl eu, molestie neque. Suspendisse faucibus augue ligula, quis rhoncus sapien commodo facilisis. Nunc dapibus tellus nec faucibus fermentum. Donec cursus non purus quis efficitur. Aenean tincidunt est quis turpis ultrices auctor. Integer lobortis eros et nulla bibendum, non consectetur ante porta.
        </p>
        <Link to="/blog/:id">
        <div className="right">
          <span className="emphesized__link title__text " type="submit">Next</span>
          <span className="small">
            Title of next blog
          </span>
        </div>
        </Link>
      </div>
    );
  };
}

export default SingleBlog;

import React from 'react';
import { Link } from 'react-router-dom';

//components
import { Nav } from '../../components/Nav';

//styles
import '../../App.css';
import './style.css';

// Media import
import Pineapple from '../../images/pineapple.jpg';

class ExplainedPost extends React.Component {

  // returnCodeBlock() {
  //   const code = JSON.stringify(JSON.parse("here is some code done"), null, 4);
  //   return code
  // }
  render() {
    return (
      <div className="blog__container">
        <Nav />
        <div className="title">
          Bash script for generating random words
        </div>
        <div className="title__text">
          <p className="regular__italic">Have you ever needed to run a bunch of CLI commands at once and didn't feel like typing them over and over again? Me too.</p>
        </div>
        <div className="img__container">
          <img src={Pineapple} alt="pineapple"/>
        </div>
        <section className="caption">Random Pineapple picture by Pineapple Supply Co. via Unsplash</section>
        <p className="post__body">
          While working on one of my projects at work I found it necessisary to make a script to generate many Simple Notification Service topics at a time.
        </p>
        <p className="post__body">
          Before this, I never had to do much bash scripting, so this was a cool introduction to a couple of tools. Before it all went away from my brain like a highschool student that just finished a biology exam she crammed for, I figured it would be neat to recount how I made this script.
        </p>
        <code>
          {/* { this.returnCodeBlock() } */}
        </code>
        <Link to="/explained/">
        <div className="right">
          <span className="emphesized__link title__text " type="submit">Back</span>
        </div>
        </Link>
      </div>
    );
  };
}

export default ExplainedPost;


//
// "WORDFILE=/usr/share/dict/words
// COUNTER=0
//
// while [ $COUNTER -lt 25 ]; do
//
// # seed random from pid
//
// # $$ means the process ID for the script that is currently running
//
// # RANDOM=$$;
//
// RANDOM=$((1 + RANDOM % 123421))
//
// # using cat means wc outputs only a number, not number followed by filename
//
// lines=$(cat $WORDFILE  | wc -l);
//
// rnum=$((RANDOM*RANDOM%$lines+1));
// #xargs sed -n \"$rnum p\" $WORDFILE
//
// OUTPUT=\"\"\"$(sed -n \"$rnum p\" $WORDFILE)\"\"\"
//
// let COUNTER=COUNTER+1
//
// aws sns create-topic --name $OUTPUT
// done"

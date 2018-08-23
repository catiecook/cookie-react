import React from 'react';
import { Link } from 'react-router-dom';
import Gist from 'react-gist';

//components
import { Nav } from '../../components/Nav';

//styles
import '../../App.css';
import './style.css';

// Media import
import Pineapple from '../../images/pineapple.jpg';

class ExplainedPost extends React.Component {
  render() {
    return (
      <div className="blog__container">
        <Nav />
        <div className="sub__title">
          Bash script for generating random words
        </div>
        <div className="title__text">
          <p className="regular__italic">Have you ever needed to run a bunch of CLI commands at once and didn't feel like typing them over and over again? Me too.</p>
        </div>
        <div className="img__container">
          <img src={Pineapple} alt="pineapple"/>
        </div>
        <section className="caption">Random Pineapple picture by Pineapple Supply Co. via Unsplash</section>
        <div className="post__body">
          <section>
            <div>
              Recently I came across an instance where I needed to create over 200 Simple Notification Service topics. That is a lot of topics. And I'm not about to click through the console 200 times just to set up my environment to proceed with my test. So, it was necessisary to make a script to generate as mayn SNS topics as I want with one click.
            </div>
            <div>
              I also saw this as a fun incentive to learn a bit more about bash, and how to create a sort of loop of CLI commands. AKA some more black magic.
            </div>
            <div>
              So, before it dissapears from my brain like a highschool student that just finished a biology exam she crammed for, I figured it would be neat to recount how I made this script.
            </div>
            <div>
              <span className="regular__italic emph">
                Here's the final script.
              </span>
              <br />
              If you're reading this an you're like: "...This can be done in one line", I know - and I realized that after I finished this one. I still think this is handy, and can be reused for other tasks pretty easily.
            </div>
            <div>
              <Gist id='3654c1dc503c23e3a1809bc168da011f' />
            </div>
          </section>
          <section>
            <div className="regular__italic emph">
              Let's break this down.
            </div>
            <code className="code__snippet">
              WORDFILE=/usr/share/dict/words
            </code>
            <div>
              Open the dictionary file on a (UNIX system) and place it in the variable WORDFILE.
            </div>
            <code className="code__snippet">
              while [ $COUNTER -lt 25 ]; do
            </code>
            <div>
              This is pretty straight forward: I'm setting a while loop to continue the operation it encloses while the counter is less than 25.
            </div>
            <code className="code__snippet">
              RANDOM=$(1 + RANDOM % 123421)
            </code>
            <div>
              This is pretty basic, but I want to take a quick sentence of two to talk about the "$" in bash. In this sepcific use case, the $ is passing the value inside the parans to the variable "RANDOM". So, with the above code segment, RANDOM is being set to equal.
            </div>
            <code className="code__snippet">
              lines=$(cat $WORDFILE  | wc -l);
            </code>
            <br />
            <code className="code__snippet">
              rnum=$((RANDOM*RANDOM%$lines+1));
            </code>
            <div>
              The variable lines is simply being given the value of the total count of words that WORDFILE contains. *remember that we just assigned the contents of the dictionary directory.
              <br />
              The next line is then being set to RANDOM times itself, mod with lines + 1, as to capture every single random word option to account for the use of 0 index.
            </div>
            <div>
              Next, we use SED, which is a stream editor that can preform operations such as, searching, find and replace, insertion or deletion. I've used the flag of -n here to disable the automatic printing behavior, so that only the lines I tell it to print (wiht p) are printed.
            </div>
            <div>
              Next, we use SED, which is a stream editor that can preform operations such as, searching, find and replace, insertion or deletion. I've used the flag of -n here to disable the automatic printing behavior, so that only the lines I tell it to print (wiht p) are printed.
              <br />
              Then, increment the counter, and print the aws sns cli command.
              <br /> (The last argument in the loop is read as the return)
            </div>
            <code className="code__snippet">
              OUTPUT="""$(sed -n "$rnum p" $WORDFILE)"""
            </code>
            <br />
            <code className="code__snippet">
              let COUNTER=COUNTER+1
            </code>
            <br />
            <code className="code__snippet">
              aws sns create-topic --name $OUTPUT
            </code>
            <div>
              OK! That's it. Hope you learned a thing!
            </div>
          </section>
        </div>
        <div className="right">
          <span className="emphesized__link title__text" type="submit">
            <Link to="/blog/">
              Back
            </Link>
          </span>
        </div>
      </div>
    );
  };
}

export default ExplainedPost;

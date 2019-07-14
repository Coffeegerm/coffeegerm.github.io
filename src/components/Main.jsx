/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

export default class Main extends React.PureComponent {
  render() {
    return (
      <section id="one">
        <header className="major">
          <h2>
            &quot;The quieter you become,
            <br />
            the more you can hear&quot; - Ram Dass
          </h2>
        </header>
        <p>
          I started programming when I was 15 years old and never stopped breaking and fixing, reading and writing, and
          most importantly; learning. Programming has become more of a way of life than simply a job or a hobby,
          it&apos;s become a focal point of who I am as a person.
          <br />
          Besides programming I do other things too! (Shocking, I know) I enjoy playing Magic: The Gathering, reading,
          playing a few games here and there, and searching for new beers to try and for the perfect Tom Collins.
        </p>
        <ul className="actions">
          <li>
            {
              // this will eventually take you to my blog
            }
            <a className="button">Learn More</a>
          </li>
        </ul>
      </section>
    );
  }
}

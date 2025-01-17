import { Link } from "react-router-dom";
import "./style/LandingContent.css";

const colors = {};

export default function Hero() {
  console.log("in landing content")
  return (
    <div className="landing-content">
      <div className="what-is-toneteller-div">
        <p className="overline-text">WHAT IS TONETELLER?</p>
        <p className="heading-5">
          The ultimate tool for understanding tone in written communication.
        </p>
        <p className="body-text">
          Our application uses state-of-the-art artificial intelligence to
          analyze text and accurately detect the tone of a message, including,
          happy, sad, angry, and more. With Toneteller, you will never have to
          guess at someone’s tone again.
        </p>

        <div className="what-is-toneteller-grid">
          <div className="what-is-toneteller-column">
 
            <div className="what-is-toneteller-img background-pink">
              <img src="/images/what_is_toneteller_1.png"></img>
            </div>
            <div className="what-is-toneteller-text">
              <p className="heading-6">Refine your social skills</p>
              <p className="body-text">
                Our application uses state-of-the-art artificial intelligence to
                analyze text and accurately detect the tone of a message,
                including, happy, sad, angry, and more. With Toneteller, you
                will never have to guess at someone’s tone again.
              </p>
            </div>
          </div>

          <div className="what-is-toneteller-column">
            <div className="what-is-toneteller-img background-teal">
              <img src="/images/what_is_toneteller_2.png"></img>
            </div>
            <div className="what-is-toneteller-text">
              <p className="heading-6">Pick up on the vibes</p>
              <p className="body-text">
                Are they serious, or are they only joking? Always be able to
                accurately interpret the tone of communication with Toneteller.
              </p>
            </div>
          </div>

          <div className="what-is-toneteller-column">
            <div className="what-is-toneteller-img background-fuchsia">
              <img src="/images/what_is_toneteller_3.png"></img>
            </div>
            <div className="what-is-toneteller-text">
              <p className="heading-6">
                Strengthen confidence in communicating
              </p>
              <p className="body-text">
                Gain the skills to understand the emotional context of any
                conversation. With Toneteller, you'll have the ability to read
                between the lines and understand the true emotion behind their
                words.
              </p>
            </div>

          </div>
        </div>
      </div>

      <div className="who-can-use-toneteller-div">
        <p className="overline-text">WHO CAN USE TONETELLER?</p>
        <p className="heading-5">
          Developed by communicators, for communicators.
        </p>
        <p className="body-text">
          Whether you're a business professional looking to better understand
          clients and colleagues, a student trying to improve your comprehension
          of written texts, or anyone who wants to communicate more effectively
          through writing, Toneteller has you covered.
        </p>

        <div className="what-is-toneteller-grid">
          <div className="what-is-toneteller-column">

            <div className="what-is-toneteller-img background-sky">
              <img src="/images/who_can_use_toneteller_1.png"></img>
            </div>
            <div className="what-is-toneteller-text">
              <p className="heading-6">
                Created for individuals who struggle with social interaction
              </p>
              <p className="body-text">
                When it comes to communication, not everyone is on the same
                playing field. can help users better understand the intentions
                and emotions of others, which can be especially important in
                avoiding misunderstandings or conflicts.
              </p>
            </div>
          </div>

          <div className="what-is-toneteller-column">
            <div className="what-is-toneteller-img background-purple">
              <img src="/images/who_can_use_toneteller_2.png"></img>
            </div>
            <div className="what-is-toneteller-text">
              <p className="heading-6">
                Designed for professionals and students
              </p>
              <p className="body-text">
                Knowing the tone of a written communication from a client or
                colleague can help you respond appropriately and avoid
                misunderstandings. Toneteller can also help students better
                understand the tone of written texts they are reading for class,
                which could improve their comprehension and analysis of the
                material.
              </p>
            </div>
          </div>

          <div className="what-is-toneteller-column">
            <div className="what-is-toneteller-img background-rose">
              <img src="/images/who_can_use_toneteller_3.png"></img>
            </div>
            <div className="what-is-toneteller-text">
              <p className="heading-6">Built for readers and writers</p>
              <p className="body-text">
                Knowing the tone of a piece of writing can help writers craft
                more effective and engaging content. Toneteller helps writers
                identify the tone of their writing and was designed to be
                particularly useful for those who are just starting out.
              </p>
            </div>

          </div>
        </div>
      </div>

      <img className="banner" src="/images/banner.png"></img>

      <div className="cta">
        <p className="overline-text">AVAILABLE NOW</p>
        <p className="heading-2">
          Say goodbye to guessing and hello to clarity WITH TONETELLER.
        </p>
        <Link to="/toneteller">
          <button className="primary-button heading-5 px-80">
            Try Toneteller today
          </button>
        </Link>
      </div>

      <img className="banner" src="/images/banner.png"></img>

      <div className="how-does-it-work-div">
        <p className="overline-text p-60">YOU MIGHT BE WONDERING...</p>
        <p className="heading-5 p-60">How exactly does Toneteller work?</p>
        <p className="body-text p-60">

          Toneteller uses machine learning to perform sentiment analysis on text
          inputted by the user. The machine learning model is hosted on a Flask
          server that is deployed on Google Cloud. When a user submits text
          through the web or chrome extension client, the server processes the
          text through the machine learning model and returns the predicted
          tones to the client. The client then determines how to display the
          results on the screen.

        </p>

        <div className="what-is-toneteller-grid">

          <div className="what-is-toneteller-column column-50">
            <div className="how-does-it-work-img">
              <img src="/images/step_one.png"></img>
            </div>
            <div className="what-is-toneteller-text">
              <p className="heading-6">
                Find a written communication to analyze
              </p>
              <p className="body-text">
                All you need to start using ToneTeller is a text that you wish to decifer!

              </p>
            </div>

          </div>

          <div className="what-is-toneteller-column">
            <div className="how-does-it-work-img">
              <img src="/images/step_two.png"></img>
            </div>

            <div className="what-is-toneteller-text">
              <p className="heading-6">
                Use the Toneteller web application or Google Chrome extension
              </p>
              <p className="body-text">
                Right click and select "Toneteller" in the context menu, or
                paste into Toneteller's webpage!
              </p>
            </div>

          </div>

          <div className="what-is-toneteller-column">
            <div className="how-does-it-work-img">
              <img src="/images/step_three.png"></img>
            </div>

            <div className="what-is-toneteller-text">
              <p className="heading-6">And that's it!</p>
              <p className="body-text">
                Toneteller will ten show you the predicted tone!
              </p>
            </div>

          </div>
        </div>
      </div>

      <div className="cta download-extension-div">
        <p className="overline-text">AVAILABLE NOW</p>

        <p className="heading-2 px-40">
          DOWNLOAD OUR EXTENSION FOR GOOGLE CHROME
        </p>
        <form
          action="https://github.com/Hackathon-Hacked2023/DivineInspiration/releases/tag/v1"
          target="_blank"
        >
          <input
            className="primary-button heading-5 px-80"
            type="submit"
            value="Download"
          />
        </form>

      </div>
      <div className="cta learn-more-div">
        <p className="overline-text">LEARN MORE ABOUT</p>
        <p className="heading-2">THE LORE BEHIND TONETELLER</p>
        <form
          action="https://devpost.com/software/512332/joins/S2XZ4vcd7goRNHkjHkKCMQ"
          target="_blank"
        >
          <input
            className="primary-button heading-5 px-80"
            type="submit"
            value="Read our story"
          />
        </form>
      </div>

      <div className="meet-the-team-grid">
          <div className="meet-the-team-row">
            <div className="meet-the-team-column">
              <div className="meet-the-team-img background-purple">
                <img src="/images/ray.png"></img>
              </div>
              <p className="heading-4">RAY</p>
              <p className="heading-6">Backend developer</p>
            </div>

            <div className="meet-the-team-column">
              <div className="meet-the-team-img background-teal">
                <img src="/images/developer4.png"></img>
              </div>
              <p className="heading-4">YUI</p>
              <p className="heading-6">Frontend developer</p>
            </div>
          </div>

          <div className="meet-the-team-row">
            <div className="meet-the-team-column">
              <div className="meet-the-team-img background-pink">
                <img src="/images/developer3.png"></img>
              </div>
              <p className="heading-4">TRINITY</p>
              <p className="heading-6">Frontend developer</p>
            </div>

            <div className="meet-the-team-column">
              <div className="meet-the-team-img background-rose">
                <img src="/images/developer1.png"></img>
              </div>
              <p className="heading-4">JULIA</p>
              <p className="heading-6">Backend developer</p>
            </div>
          </div>

          <div className="meet-the-team-row">
            <div className="meet-the-team-column">
              <div className="meet-the-team-img background-violet">
                <img src="/images/developer5.png"></img>
              </div>
              <p className="heading-4">ANIKET</p>
              <p className="heading-6">Full Stack developer</p>
            </div>

            <div className="meet-the-team-column">
              <div className="meet-the-team-img background-sky">
                <img src="/images/developer2.png"></img>
              </div>
              <p className="heading-4">CHRIS</p>
              <p className="heading-6">Designer</p>
            </div>
          </div>
        </div>
    </div>
  );
}

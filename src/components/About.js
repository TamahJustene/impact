
import React from 'react'
import './About.css'
import about from "./assets/about.jpg";
import about2 from "./assets/about-2.jpg";
import client1 from "./assets/client-1.png";
import client2 from "./assets/client-2.png";
import client3 from "./assets/client-3.png";
import client4 from "./assets/client-4.png";
import client5 from "./assets/client-5.png";
import client6 from "./assets/client-6.png";
import stats from "./assets/stats-img.svg";

const About = () => {
  return (
    <div>
       <section className="about-us">
          <div className="about-us-heading">
            <h1>About Us</h1>
            <hr className="horizontal-line"></hr>
            <p>
              {" "}
              Impact serves as a dynamic and inclusive platform that empowers
              individuals, organizations, and communities to create positive
              social and environmental impact.
            </p>
          </div>
          {/* the image and video */}

          <div className="About-us-details">
            <div className="About-us-image">
              <h2>
                One of the key features of Impact is its ability to bring
                together{" "}
              </h2>
              <img src={about}></img>
              <p>
                Impact refers to the significant and lasting effects or
                consequences of an action, event, or decision. It encompasses
                both the intended and unintended outcomes that result from
                various activities. Impact can be observed in different aspects
                of life, including social, economic, environmental, and personal
                domains. In the context of social initiatives or projects,
                impact is often used to assess the effectiveness and value of
                the efforts made.{" "}
              </p>
              <br></br>
              <p>
                lIn the context of social initiatives or projects, impact is
                often used to assess the effectiveness and value of the efforts
                made. It focuses on the positive changes that occur as a result
                of interventions aimed at addressing specific issues or
                improving certain conditions. These changes can range from
                individual transformations to broader societal shifts.
              </p>
            </div>
            <div className="about-us-video">
              <p>
                The concept of impact evaluation plays a crucial role in
                understanding and measuring the outcomes and effectiveness of
                programs and policies.{" "}
              </p>
              <ul>
                <li>It involves gathering data</li>
                <li>analyzing the results</li>
                <li>
                  determining the extent to which the intended goals have been
                  achieved. By assessing impact, organizations and policymakers
                  can make informed decisions, allocate resources effectively,
                  and make necessary adjustments to maximize their positive
                  influence.
                </li>
              </ul>
              <p>
                Moreover, impact extends beyond tangible outcomes and can also
                include intangible aspects such as changes in attitudes,
                behavior, or perceptions. For instance, a social campaign may
                aim to raise awareness about a particular issue, leading to a
                shift in public opinion and increased advocacy for change. This
                intangible impact can be equally powerful in shaping societies
                and fostering progress.It is important to note that impact can
                have both positive and negative dimensions.
              </p>
              <img src={about2} />
              <div className="about-play-icon">
                <div className="circle"></div>
                <i className="fas fa-play"></i>
              </div>
            </div>
          </div>

          <div className="About-us-client ">
            <div className="about-us-client-image client-show">
              <img src={client1} />
            </div>
            <div className="about-us-client-image client-show">
              <img src={client2} />
            </div>
            <div className="about-us-client-image client-hide">
              <img src={client3} />
            </div>
            <div className="about-us-client-image client-hide">
              <img src={client4} />
            </div>
            <div className="about-us-client-image client-hide">
              <img src={client5} />
            </div>
            <div className="about-us-client-image client-hide">
              <img src={client6} />
            </div>
          </div>
          {/* The statistics section  */}
          <div className="about-us-stat">
            <div className="stats-image">
              <img src={stats} />
            </div>
            <div className="start-text-contents">
              <div className="starts-text">
                <div className="starts-text-grean">
                  <h3>232</h3>
                </div>
                <div className="starts-text-exp">
                  <p>
                    <b>Happy clieant</b> impact is often used to assess the
                    effectiveness and value.
                  </p>
                  <hr></hr>
                </div>
                <hr></hr>
              </div>
              <div className="starts-text">
                <div className="starts-text-grean">
                  <h3>521</h3>
                </div>
                <div className="starts-text-exp">
                  <p>
                    <b>Projects</b> impact is often used to assess the
                    effectiveness and value.
                  </p>
                  <hr></hr>
                </div>
                <hr></hr>
              </div>
              <div className="starts-text">
                <div className="starts-text-grean">
                  <h3>453</h3>
                </div>
                <div className="starts-text-exp">
                  <p>
                    <b>Hours of support</b> impact is often used to assess the
                    effectiveness and value.
                  </p>
                  <hr></hr>
                </div>
                <hr></hr>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default About

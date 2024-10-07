import React from "react";
import "./CardsPage.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const teamMembers = [
  {
    name: "Shubham Gaur",
    title: "Software Developer",
    imgSrc: "https://media.licdn.com/dms/image/D4D03AQFRj6D_C8XHKQ/profile-displayphoto-shrink_800_800/0/1676394754123?e=1724284800&v=beta&t=T9TrlrMA7jj_nar5xXf0uA4yDvrrx9mXV6JlZHREO9o",
    social: {
      facebook: "https://codepen.io/collection/XdWJOQ/",
      twitter: "https://codepen.io/collection/XdWJOQ/",
      googlePlus: "https://codepen.io/collection/XdWJOQ/",
      linkedin: "https://codepen.io/collection/XdWJOQ/"
    }
  },
  {
    name: "Rahul Sharma",
    title: "Software Developer",
    imgSrc: "https://media.licdn.com/dms/image/D4D03AQHz_OHpu3puQw/profile-displayphoto-shrink_800_800/0/1710444198139?e=1724284800&v=beta&t=rQbtGhUtJjY0FZUid4VP1pToAHuGHnZO9ZY7tC0Lz9c",
    social: {
      facebook: "https://codepen.io/collection/XdWJOQ/",
      twitter: "https://codepen.io/collection/XdWJOQ/",
      googlePlus: "https://codepen.io/collection/XdWJOQ/",
      linkedin: "https://codepen.io/collection/XdWJOQ/"
    }
  },
  {
    name: "Sanjay Suthar",
    title: "Software Developer",
    imgSrc: "https://media.licdn.com/dms/image/D4D03AQHm_hKQnXkipA/profile-displayphoto-shrink_800_800/0/1713553117870?e=1724284800&v=beta&t=Mb1_M3BLMuv4vKjcOJiqbRTSukmHsp9nGGWDuwsyXDg",
    social: {
      facebook: "https://codepen.io/collection/XdWJOQ/",
      twitter: "https://codepen.io/collection/XdWJOQ/",
      googlePlus: "https://codepen.io/collection/XdWJOQ/",
      linkedin: "https://codepen.io/collection/XdWJOQ/"
    }
  },
  {
    name: "Gaurav Jadhav ",
    title: "Software Developer",
    imgSrc: "https://media.licdn.com/dms/image/D5603AQFBUlSqHlk_DA/profile-displayphoto-shrink_400_400/0/1713105304110?e=1724284800&v=beta&t=tVz65_6SSbJJujeP2zVivY1IQ71xJd69os7cTKV5MQQ",
    social: {
      facebook: "https://codepen.io/collection/XdWJOQ/",
      twitter: "https://codepen.io/collection/XdWJOQ/",
      googlePlus: "https://codepen.io/collection/XdWJOQ/",
      linkedin: "https://codepen.io/collection/XdWJOQ/"
    }
  }
];
const TeamSection = () => {
  return (
    <div className="container">
    <div className="row">
      {teamMembers.map((member, index) => (
        <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="our-team">
            <div className="picture">
              <img className="img-fluid" src={member.imgSrc} alt={member.name} />
            </div>
            <div className="team-content">
              <h3 className="name">{member.name}</h3>
              <h4 className="title">{member.title}</h4>
            </div>
            <ul className="social">
              <li>
                <a href={member.social.facebook} className="fa fa-facebook" aria-hidden="true"></a>
              </li>
              <li>
                <a href={member.social.twitter} className="fa fa-twitter" aria-hidden="true"></a>
              </li>
              <li>
                <a href={member.social.googlePlus} className="fa fa-google-plus" aria-hidden="true"></a>
              </li>
              <li>
                <a href={member.social.linkedin} className="fa fa-linkedin" aria-hidden="true"></a>
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default TeamSection;

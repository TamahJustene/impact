import React from 'react';
import './Teams.css';
import team1 from "./assets/team-1.jpg"
import team2 from "./assets/team-2.jpg"
import team3 from "./assets/team-3.jpg"
import team4 from "./assets/team-4.jpg"

const Teams = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'John Doe',
      position: 'CEO',
      image: team1,
      socialMedia: {
        twitter: 'https://twitter.com',
        facebook: 'https://facebook.com',
        instagram: 'https://instagram.com',
        linkedin: 'https://linkedin.com',
      },
    },
    {
      id: 2,
      name: 'Jane Smith',
      position: 'Designer',
      image: team2,
      socialMedia: {
        twitter: 'https://twitter.com',
        facebook: 'https://facebook.com',
        instagram: 'https://instagram.com',
        linkedin: 'https://linkedin.com',
      },
    },
    {
      id: 3,
      name: 'Mike Johnson',
      position: 'Developer',
      image: team3,
      socialMedia: {
        twitter: 'https://twitter.com',
        facebook: 'https://facebook.com',
        instagram: 'https://instagram.com',
        linkedin: 'https://linkedin.com',
      },
    },
    {
      id: 4,
      name: 'Sarah Williams',
      position: 'Marketing Manager',
      image: team4,
      socialMedia: {
        twitter: 'https://twitter.com',
        facebook: 'https://facebook.com',
        instagram: 'https://instagram.com',
        linkedin: 'https://linkedin.com',
      },
    },
    // Add more team members here
  ];

  return (
    <div className="teams-section">
      <div className='teams-header'>
        <h1>Our Teams</h1>
        <hr/>
        <p> Impact is a powerful platform that aims to facilitate positive</p>
      </div>
      <div className="teams-container">
        {teamMembers.map((member) => (
          <div className="team-member" key={member.id}>
            <div className="team-member-avatar">
              <img src={member.image} alt={`Team Member ${member.id}`} className="team-member-image" />
            </div>
            <h3 className="team-member-name">{member.name}</h3>
            <p className="team-member-position">{member.position}</p>
            <div className="team-member-social">
              <a href={member.socialMedia.twitter} target="_blank" rel="noopener noreferrer">
                <div className="social-media-icon twitter"><i class="fab fa-twitter"></i></div>
              </a>
              <a href={member.socialMedia.facebook} target="_blank" rel="noopener noreferrer">
                <div className="social-media-icon facebook"><i class="fab fa-facebook"></i></div>
              </a>
              <a href={member.socialMedia.instagram} target="_blank" rel="noopener noreferrer">
                <div className="social-media-icon instagram"><i class="fab fa-instagram"></i></div>
              </a>
              <a href={member.socialMedia.linkedin} target="_blank" rel="noopener noreferrer">
                <div className="social-media-icon linkedin"><i class="fab fa-linkedin"></i></div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;

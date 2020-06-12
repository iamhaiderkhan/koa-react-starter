import React, { PureComponent } from 'react';

import styles from './home.styles.pcss';


const meetingsList = [
  {
    time: '08:00 AM',
    description: 'Discussion of the attack strategy',
    participants: [
      'Obi-Wan Kenobi',
      'Luke Skywalker',
    ],
  },
  {
    time: '11:00 AM',
    description: 'Family meeting to discuss disagreements',
    participants: [
      'Anakin Skywalker',
      'Luke Skywalker',
    ],
  },
  {
    time: '02:00 PM',
    description: 'Attack on Death Star',
    participants: [
      'Luke Skywalker',
      'Han Solo',
    ],
  },
];

class Home extends PureComponent {
  static participantsList(participants) {
    return participants.map((participator) => {
      return (
        <li key={participator}>
          {participator}
        </li>
      );
    });
  }

  static meetings() {
    return meetingsList.map((meeting) => {
      return (
        <div
          key={meeting.description}
          className={styles.meeting}
        >
          <div className={styles.time}>
            <span>
              {meeting.time}
            </span>
          </div>

          <div className={styles.description}>
            {meeting.description}
          </div>

          <h3 className={styles.participantsTitle}>
            Participants:
          </h3>
          <ul className={styles.participantsList}>
            {Home.participantsList(meeting.participants)}
          </ul>
        </div>
      );
    });
  }

  render() {
    return (
      <>
        <h1 className={styles.title}>Meetings</h1>

        <div>{Home.meetings()}</div>
      </>
    );
  }
}

export default Home;

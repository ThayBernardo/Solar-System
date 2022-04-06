import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title keys="title" headline="Missões" />
        {missions.map(({ name, year, country, destination }) => (<MissionCard
          key="mission"
          name={ name }
          year={ year }
          country={ country }
          destination={ destination }
        />))}
      </div>
    );
  }
}

export default Missions;

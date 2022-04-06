import React from 'react';
import Title from './Title';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title keys="title" headline="Missões" />
      </div>
    );
  }
}

export default Missions;

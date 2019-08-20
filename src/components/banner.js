import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react'

class Banner extends Component {

  render() {
    return (
      <Segment inverted color='red' id="referal-banner">
      Refer a friend get 10% OFF
    </Segment>
    );
  }

}

export default Banner;

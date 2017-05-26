import React, {Component} from 'react';

class SetupContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div>
              {this.props.main}
          </div>
        );
    }
}

export default SetupContainer;
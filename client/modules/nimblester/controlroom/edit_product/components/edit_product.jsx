import React, {Component} from 'react';

class EditProduct extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
          <div>
              {this.props.productId}
          </div>
        );
    }

}

export default EditProduct;
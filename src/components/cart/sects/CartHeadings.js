import { Component } from "react";

class CartHeadings extends Component {
  constructor(props) {
    super(props);

    this.createCartHeading = this.createCartHeading.bind(this);
  }

  createCartHeading(props) {
    return (
      <div className={props.cartHeadingClasses}>
        <h4>{props.cartHeadingText}</h4>
      </div>
    );
  }

  render() {
    return (
      <div id="cartHeadings">
        <div className="container-fluid cart-headings-box">
          <div className="row cart-headings-row">
            <this.createCartHeading
              cartHeadingClasses="col-lg-3 col-md-3 col-sm-6 col-xs-6 cart-heading"
              cartHeadingText="Product"
            />

            <this.createCartHeading
              cartHeadingClasses="col-lg-3 col-md-3 col-sm-6 col-xs-6 cart-heading"
              cartHeadingText="Quantity"
            />

            <this.createCartHeading
              cartHeadingClasses="col-lg-3 col-md-3 col-sm-6 col-xs-6 cart-heading"
              cartHeadingText="Price"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CartHeadings;

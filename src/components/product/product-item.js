import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ProductItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productItemClass: "",
    };
  }

  handleMouseEnter() {
    this.setState({ productItemClass: "image-blur" });
  }

  handleMouseLeave() {
    this.setState({ productItemClass: "" });
  }

  render() {
    const { id, description, thumb_image_url, logo_url } = this.props.item;
    return (
      <div
        className="product-item-wrapper"
        onMouseEnter={() => this.handleMouseEnter()}
        onMouseLeave={() => this.handleMouseLeave()}
      >
        <div
          className={"product-img-background " + this.state.productItemClass}
          style={{
            backgroundImage: "url(" + thumb_image_url + ")",
          }}
        />

        <div className="img-text-wrapper">
          <div className="logo-wrapper">
            <img src={logo_url} />
          </div>

          <div className="subtitle">{description}</div>
        </div>
      </div>
    );
  }
}

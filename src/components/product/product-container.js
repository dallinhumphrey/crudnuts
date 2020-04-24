import React, { Component } from "react";
import axios from "axios";

import ProductItem from "./product-item";

export default class ProductContainer extends Component {
  constructor() {
    super();

    this.state = {
      pageTitle: "Welcome to my product",
      isLoading: false,
      data: [],
    };

    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(filter) {
    this.setState({
      data: this.state.data.filter((item) => {
        return item.category === filter;
      }),
    });
  }

  getProductItems() {
    axios
      .get("https://dallinhumphrey.devcamp.space/product/product_items")
      .then((response) => {
        this.setState({
          data: response.data.product_items,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  productItems() {
    return this.state.data.map((item) => {
      return <ProductItem item={item} key={item.id} />;
    });
  }

  componentDidMount() {
    this.getProductItems();
  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="product-items-wrapper">
        <button className="btn" onClick={() => this.handleFilter("Glazed")}>
          Glazed
        </button>
        <button className="btn" onClick={() => this.handleFilter("Chocolate")}>
          Chocolate
        </button>
        <button
          className="btn"
          onClick={() => this.handleFilter("Sweet and Savory")}
        >
          Sweet and Savory
        </button>

        {this.productItems()}
      </div>
    );
  }
}

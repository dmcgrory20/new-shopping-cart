import React, { Component } from 'react';

//import('./src/static/data/products.json').then(json => ...)

class App extends React.Component {
  render() {
    return (
      <ProductCatalog products={this.props.products} />
    );
  }
}

class ProductCatalog extends React.Component {
  render() {
    const rows = [];

    this.props.products.forEach((product) => {
      rows.push(
          <Product
            product={product}/>
            );
    });

    return (
      <table>
        <tbody>{rows}</tbody>
      </table>
      );
  }
}

class Product extends React.Component {
  const product = this.props.product;

  render() {
    return (
      <img classes="shelf-item__img"
        src={
          import(`../../src/static/products/${product.sku}_1.jpg`)
        }
        alt={product.title}
        ></img>
      <p className="shelf-item__title">{product.title}</p>
    );
  }
}


ReactDOM.render(
  <App products={PRODUCTS} />,
  document.getElementById('container')
);
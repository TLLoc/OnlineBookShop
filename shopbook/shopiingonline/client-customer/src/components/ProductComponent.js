import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css'; // Assuming your CSS file is named styles.css
import withRouter from '../utils/withRouter';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      hoveredProductId: null,
    };
  }

  // Function to format number with commas
  formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  render() {
    const { hoveredProductId } = this.state;

    const prods = this.state.products.map((item) => {
      const isHovered = hoveredProductId === item._id;
      const productClass = isHovered ? 'product product-hover' : 'product';

      return (
        <div
          key={item._id}
          className={`inline ${productClass}`}
          onMouseEnter={() => this.setState({ hoveredProductId: item._id })}
          onMouseLeave={() => this.setState({ hoveredProductId: null })}
        >
          <figure className='text-center py-1 px-4 border-2 border-solid border-gray-300 rounded-md p-4 shadow-md mt-8'>
            <Link to={'/product/' + item._id}><img src={"data:image/jpg;base64," + item.image} width="300px" height="300px" alt="" /></Link>
            <figcaption className="text-center font-bold">
              {item.name}<br />
              Price: <span style={{ color: 'red' }}>{this.formatPrice(item.price)} vnđ</span>
            </figcaption>
            <input className='rounded-lg py-2 px-4 border-solid border-2 border-indigo-400 mt-3' 
            type="submit" 
            value="View Product" 
            ></input>
          </figure>
        </div>
      );
    });

    return (
      <div>
        <div className="align-center">
          <h2 className="text-center font-bold text-4xl mt-3 text-red-500">LIST PRODUCTS</h2>
          {prods}
        </div>
      </div>
    );
    
  }

  componentDidMount() { // first: /product/...
    const params = this.props.params;
    if (params.cid) {
      this.apiGetProductsByCatID(params.cid);
    }
    else if (params.keyword) {
      this.apiGetProductsByKeyword(params.keyword);
    }
  }
  componentDidUpdate(prevProps) { // changed: /product/...
    const params = this.props.params;
    if (params.cid && params.cid !== prevProps.params.cid) {
      this.apiGetProductsByCatID(params.cid);
    }
    else if (params.keyword && params.keyword !== prevProps.params.keyword) {
      this.apiGetProductsByKeyword(params.keyword);
    }
  }
  // apis
  apiGetProductsByCatID(cid) {
    axios.get('/api/customer/products/category/' + cid).then((res) => {
      const result = res.data;
      this.setState({ products: result });
    });
  }
  apiGetProductsByKeyword(keyword) {
    axios.get('/api/customer/products/search/' + keyword).then((res) => {
      const result = res.data;
      this.setState({ products: result });
    });
  }
}
export default withRouter(Product);
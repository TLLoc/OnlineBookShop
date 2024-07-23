import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import withRouter from '../utils/withRouter';
import Dropdown from "../components/DropdownComponent/Dropdown/Dropdown"
import DropdownItem from "../components/DropdownComponent/DropdownItem/DropdownItem"


class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      txtKeyword: ''
    };
  }
  

  render() {
    const cates = this.state.categories.map((item) => {
      return (
        <li key={item._id} className="menu"><Link to={'/product/category/' + item._id}>{item.name}</Link></li>
      );
    });
    return (
      <div className="border-bottom bg-blue-300 text-[#0284c7]">
        <div className="float-left font-bold aglin-center items-center py-2 ml-3">
          <ul className="menu" style={{marginLeft:"25px"}}>
            <li className="menu"><Link to='/'>Home</Link></li>
            <li className="menu float-right">
            <Dropdown
            buttonText="Category"
            content={
              <>
                {cates.map((item, id) => (
                  <DropdownItem key={id}>{item}</DropdownItem>
                ))}
              </>
            }
            />
            </li>
          </ul>
        </div>
        <div className="float-right font-bold ">
          <form className="search">
            <input
              type="search"
              placeholder="Look For Product"
              className="keyword-input px-4 py-2 rounded-lg  "
              value={this.state.txtKeyword}
              onChange={(e) => { this.setState({ txtKeyword: e.target.value }) }}
            />
            <button 
              type="submit"
              className="bg-green-300 py-2 px-4 rounded-lg text-white border-solid border-2 ml-5 mr-3"
              onClick={(e) => this.btnSearchClick(e)} >
                SEARCH
            </button>
          </form>
        </div>
        <div className="float-clear" />
      </div>
    );
  }

  componentDidMount() {
    this.apiGetCategories();
  }

  // event-handlers
  btnSearchClick(e) {
    e.preventDefault();
    if(this.state.txtKeyword.length > 0){
      this.props.navigate('/product/search/' + this.state.txtKeyword);
    }
    
  }

  // APIs
  apiGetCategories() {
    axios.get('/api/customer/categories').then((res) => {
      const result = res.data;
      this.setState({ categories: result });
    });
  }
}

export default withRouter(Menu);

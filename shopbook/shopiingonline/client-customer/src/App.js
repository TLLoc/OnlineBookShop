import './App.css';
import React, { Component } from 'react';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import MyProvider from './contexts/MyProvider';
import Myfooter from './components/MyFooter';
import Menu from './components/MenuComponent';
import Inform from './components/InformComponent';

class App extends Component {
  render() {
    const myStyle = {
      backgroundImage: `url("https://static.vecteezy.com/system/resources/previews/013/651/331/non_2x/graphic-design-illustration-of-a-stack-of-encyclopedia-books-background-with-blank-area-free-vector.jpg")`,
      backgroundRepeat: 'no-repeat',  // Thêm thuộc tính background-repeat
      backgroundSize: 'cover',        // Thêm thuộc tính background-size để bao phủ toàn bộ màn hình
      backgroundPosition: 'center'    // Thêm thuộc tính background-position để canh giữa ảnh nền
    };

    return (
      <MyProvider>
        <BrowserRouter>
          <div style={myStyle}>
          <Menu/>
          <Inform/>
            <Main />
            <Myfooter/>
          </div>
        </BrowserRouter>
      </MyProvider>
    );
  }
}

export default App;

import './App.css';
import React, { Component } from 'react';
import MyProvider from './contexts/MyProvider';
import Login from './components/LoginComponent';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    const myStyle1 = {
      backgroundImage: `url("https://static.vecteezy.com/system/resources/previews/013/651/331/non_2x/graphic-design-illustration-of-a-stack-of-encyclopedia-books-background-with-blank-area-free-vector.jpg")`,
      backgroundRepeat: 'no-repeat',  // Thêm thuộc tính background-repeat
      backgroundSize: 'cover',        // Thêm thuộc tính background-size để bao phủ toàn bộ màn hình
      backgroundPosition: 'center'    // Thêm thuộc tính background-position để canh giữa ảnh nền
    };
    const myStyle2 = {
      backgroundImage: `url("https://static.vecteezy.com/system/resources/previews/013/651/331/non_2x/graphic-design-illustration-of-a-stack-of-encyclopedia-books-background-with-blank-area-free-vector.jpg")`,
      backgroundRepeat: 'no-repeat',  // Thêm thuộc tính background-repeat
      backgroundSize: 'cover',        // Thêm thuộc tính background-size để bao phủ toàn bộ màn hình
      backgroundPosition: 'center'    // Thêm thuộc tính background-position để canh giữa ảnh nền
    };
    return (
      <MyProvider>
        <div style={myStyle2}>
          <Login />
        </div>
        <BrowserRouter>
          <div style = {myStyle1}>
              <Main />
          </div>
        </BrowserRouter>
      </MyProvider>
    );
  }
}
export default App;
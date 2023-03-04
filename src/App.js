import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Bye from "./pages/Bye";
import Form from "./pages/Form";
import AllMeeetup from "./pages/AllMeeetup";


function App() {

  const meetups = [
    {
      id: 1,
      title: "test title - 1",
      body: "random place"
    },
    {
      id: 2,
      title: "test title 2",
      body: "tbrgvekld"
    },
    {
      id: 3,
      title: "4htejkl",
      body: "3rgukd"
    }
  ];

  const [post, setPost] = useState([]);

  useEffect(
    () => {
      fetch("https://test-dd596-default-rtdb.firebaseio.com/test/-NPQBADGkzJhJeiGGLxz.json")
      .then(
        (response) => 
          response.json()
      )
      .then(
        (data) => 
          {console.log(data);
          setPost(data);}
      )
    },[]
  )

  return (
    <BrowserRouter>
      <div className="App">
        <h1>Hello World</h1>
        <div>
          <Link to={'/'}>Home</Link>
          <br />
          <Link to={'/bye'}>Bye</Link>
          <br />
          <Link to={'/form'}>Form</Link>
        </div>
        <Routes>
          <Route exact path='/' element={<AllMeeetup items={post} />} />
          <Route path="/bye" element={<Bye />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

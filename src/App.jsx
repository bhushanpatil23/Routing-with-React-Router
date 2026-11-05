import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router';
import Login from './layouts/login';
import About from './layouts/about';
import Dashboard from './layouts/dashboard/dashboard';
import Users from './layouts/dashboard/Users';
import Products from './layouts/dashboard/Products';

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<p>Home Paragraph</p>}/>
        <Route path="/about" element={<p>About Paragraph</p>}/>
        <Route path="/login" element={<Login/>}/>

        <Route path="/dashboard" element={<Dashboard/>}>
          <Route path="users" element={<Users/>}/>
          <Route path="products" element={<Products/>}/>
        </Route>

        <Route path="*" element={<p>Not Found - 404</p>}/>

      </Routes>
    </BrowserRouter>

  );
}

export default App

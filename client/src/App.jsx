import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { logo } from './assets';
import { Home, CreatePost, Contact } from './pages';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

const App = () => {
  return (
 <BrowserRouter>
 {/* <header className="ml-20 h-full flex justify-between items-center bg-black sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
    <Link to="/">
      <img src={logo} alt="logo" className="w-28 object-contain"/>
      </Link>

      <Link to="/create-post" className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md">
      Create
    </Link>
 </header> */}
 <main className="h-full bg-gradient-to-b from-[#101111] from-15% via-[#263525] to-[#32CD32] mx-auto sm:p-8 px-9 py-8 w-full bg=[#f9fafe] min-h-[calc(100vh-73px)]">
    <Sidebar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/create-post" element={<CreatePost />} />
    <Route path="/contact" element={<Contact />} />

    {/* <Route path="/upload" element={<Upload />} /> */}
  </Routes>
 </main>
<Footer />
 </BrowserRouter>
  )
}

export default App
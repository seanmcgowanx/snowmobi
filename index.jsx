import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Snowmobiles from './pages/Snowmobiles/Snowmobiles';
import SnowmobileDetail from './pages/Snowmobiles/SnowmobileDetail';
import Layout from  './components/Layout'
import Dashboard from './pages/Host/Dashboard'
import Income from './pages/Host/Income'
import Reviews from './pages/Host/Reviews'
import HostLayout from './components/HostLayout'
import HostSnowmobiles from './pages/Host/HostSnowmobiles';
import HostSnowmobileDetail from './pages/Host/HostSnowmobileDetail';
import HostSnowmobileInfo from './pages/Host/HostSnowmobileInfo';
import HostSnowmobilePricing from './pages/Host/HostSnowmobilePricing';
import HostSnowmobilePhotos from './pages/Host/HostSnowmobilePhotos';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="about" element= {<About />}/>
          <Route path="snowmobiles" element= {<Snowmobiles />}/>
          <Route path="snowmobiles/:id" element= {<SnowmobileDetail />}/>
          <Route path="host" element={<HostLayout/>}>
            <Route index element= {<Dashboard />}/>
            <Route path="income" element= {<Income />}/>
            <Route path="reviews" element= {<Reviews />}/>
            <Route path="snowmobiles" element= {<HostSnowmobiles />}/>
            <Route path="snowmobiles/:id" element= {<HostSnowmobileDetail />}>
              <Route index element= {<HostSnowmobileInfo />}/>
              <Route path="pricing" element= {<HostSnowmobilePricing />}/>
              <Route path="photos" element= {<HostSnowmobilePhotos />}/>
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);
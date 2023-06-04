import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Footer from '../Footer';
import Dashboard from './Dashboard';
import City from './City';
import Zone from './Zone';
import Pharmacy from './Pharmacy';
import User from './User';
import { IoLocationSharp } from 'react-icons/io5';
import Garde from './Garde';
import CityForm from './CityForm';
import GardeForm from './GardeForm';
import ZoneForm from './ZoneForm';
import Accueil from '../Accueil';
import PharmacieZone from '../PharmaciZone'

function Navbar() {

  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow-md">
        <BrowserRouter>
          <div className="container mx-auto py-4 px-6 flex justify-between items-center">
            <a href="/" className=" flex  items-cente text-lg font-bold text-gray-800" > <IoLocationSharp size={30} height={10} color={"red"} /> <span>Pharmacie</span></a>
            <button className="sm:hidden" onClick={toggleMenu}>
              <svg viewBox="0 0 20 20" fill="currentColor" className="menu-icon w-6 h-6">
                <path fillRule="evenodd" d="M3 3h14a1 1 0 0 1 0 2H3a1 1 0 1 1 0-2zm0 5h14a1 1 0 0 1 0 2H3a1 1 0 1 1 0-2zm0 5h14a1 1 0 0 1 0 2H3a1 1 0 1 1 0-2z" clipRule="evenodd" />
              </svg>
            </button>

            <nav className={`${menuOpen ? "block" : "hidden"
              } sm:block sm:flex`}>
              <ul className="flex flex-wrap items-center justify-between gap-x-4 text-sm font-medium text-black">
                <li className="nav-item"> <Link to="/Dashboard" className="px-3 py-2 text-gray-600 hover:text-blue-500 ">Dashboard</Link></li>
                <li className="nav-item"> <Link to="/ville" className="px-3 py-2 text-gray-600 hover:text-gray-800 "> Ville</Link></li>
                <li className="nav-item"> <Link to="/zone" className="px-3 py-2 text-gray-600 hover:text-gray-800">Zone</Link></li>
                <li className="nav-item"> <Link to="/pharmacy" className="px-3 py-2 text-gray-600 hover:text-gray-800 ">Pharmacies</Link></li>
                <li className="nav-item"> <Link to="/garde" className="px-3 py-2 text-gray-600 hover:text-gray-800 ">Garde</Link></li>
                <li className="nav-item"> <Link to="/user" className="px-3 py-2 text-gray-600 hover:text-gray-800 ">User</Link></li>
                <li className="nav-item"> <Link to="/PharmacieZone" className="px-3 py-2 text-gray-600 hover:text-gray-800 ">PharmacieZone</Link></li>
              </ul>
            </nav>

          </div>
          <div>
            <Routes>

              <Route exact path="/" element={<Dashboard />}></Route>
              <Route path="/ville" element={<City />} />
              <Route path="/create-city" element={<CityForm />} />
              <Route path="/create-garde" element={<GardeForm />} />

              <Route path="/create-zone" element={<ZoneForm />} />
              <Route exact path="/Garde" element={<Zone />} />
              <Route path="/pharmacy" element={<Pharmacy />} />
              <Route path="/Zone" element={<Garde />} />
              <Route path="/user" element={<User />} />
              Garde
              Zone

            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </header>
    </div>
  );
}

export default Navbar
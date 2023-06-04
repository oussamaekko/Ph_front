import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Pharmacy = ({zoneId})=> {
  const [pharmacie, setPharmacie] = useState([]);
  const [zone , setZone] = useState([]);
  const option = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const d = new Date();
  var date = d.toLocaleDateString("en-US", option).replace(/,/g, " ");

  useEffect(() => {
    axios.get("http://localhost:8080/api/pharmacies").then((response) => {
      setPharmacie(response.data);
    });
  }, []);
  useEffect(() => {
    const fetchZone = async () => {
        const result = await axios(`http://localhost:8080/api/zone`);
        setZone(result.data);
    };
    fetchZone();
  }, []);

 
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-6 py-8 md:px-10 md:py-12 lg:px-16 lg:py-20">
        <div className="flex flex-col sm:flex-row   space-y-3 sm:space-y-0 items-center space-x-3">
          <div className="flex items-center text-xs bg-[#1B262C] text-white  rounded">
            <span className="px-3 ">{date}</span>
            <i className="bx bx-calendar text-[20px] text-black bg-teal-500 py-5 px-3"></i>
          </div>
          <div
                
                className="flex items-center text-s rounded space-x-1 py-2 px-3 bg-[#1B262C] text-white hover:text-teal-500  duration-100 cursor-pointer"
              >
                <i className="bx bx-plus-circle  "></i>
               
                <span>Ajouter une pharmacie</span>
               
              </div>
        </div>
        

        <div className="overflow-x-auto" style={{ marginTop: '20px' }}>
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">Liste des pharmacies</h1>
          <table className="table-auto w-full">
            <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
              <tr>
                <th className="px-4 py-2">Id</th>
                <th className="px-4 py-2">Nom</th>
                <th className="px-6 py-2" >Adresse</th>
                <th className="px-6 py-2" >Longitude</th>
                <th className="px-6 py-2" >Laltitude</th>
                <th className="px-6 py-2">Zone</th>
         
              </tr>
            </thead>
            <tbody>
            {pharmacie.map((v, index) => (
                    <tr
                      key={index}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {v.id}
                      </th>
                      <td className="px-6 py-4 text-white  font-medium text-center">{v.nom}</td>
                      <td className="px-6 py-4 text-white  font-medium text-center">{v.adresse}</td>
                      <td className="px-6 py-4 text-white  font-medium text-center">{v.longitude}</td>
                      <td className="px-6 py-4 text-white  font-medium text-center">{v.laltitude}</td>
                      <td className="px-6 py-4 text-white  font-medium text-center">{v.zone && v.zone.nom}</td>
                  
                    </tr>
                  ))}

            </tbody>
          </table>
        </div>


      </main>
    </div>
  )
}

export default Pharmacy
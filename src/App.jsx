import React, { useEffect, useState } from 'react'
import Footer from "./components/Footer"
import Main from "./components/Main"
import SideBar from "./components/SideBar"


function App() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  function handleToogleModal(){
    setShowModal(!showModal)
  }

  useEffect(() => {
    async function fetchAPIData(){
      const NASA_KEY = 'klSnvwcH2AuWhVCEtEenK8V03LNIXzi92NvIkX9v'  
      const url = 'https://api.nasa.gov/planetary/apod' + `?api_key=${NASA_KEY}`
      try {
        const res = await fetch(url)
        const apiData = await res.json()
        setData(apiData)
        console.log('DATA\n',apiData);
        
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchAPIData()
  },[])

  return (
    <>
      {data ? (<Main data={data} />) :(
        <div className="loadingState">
          <i class="fa-solid fa-gear"></i>
        </div>
      )}
      {showModal && (
        <SideBar data={data} handleToogleModal={handleToogleModal}/>
      )}
      {data && (
        <Footer data={data} handleToogleModal={handleToogleModal}/>
      )}
    </>
  )
}

export default App

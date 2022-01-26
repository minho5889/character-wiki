import React, {useState, useEffect} from 'react';
import "bootstrap/dist/css/bootrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Cards from "./components/Cards/Cards";
import Filters from './components/Filters';
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';
import Navbar from './components/NavBar/Navbar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Episodes from './Pages/Episodes';
import Location from './Pages/Location';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/episodes" element={<Episodes />}/>
        <Route path="/location" element={<Location />}/>
      </Routes>
    </Router>
  )
}

const Home = () => {

  let [pageNumber, setPageNumber] = useState(1); 
  let [search, setSearch] = useState("");
  let [status, setStatus] = useState("");
  let [gender, setGender] = useState("");
  let [species, setSpecies] = useState("");

  let [fetchData, updateFetchedData] = useState([]);
  let {info, results} = fetchedData; // lets destructure it
 
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(()=> {
    (async function (){
      let data = await fetch(api).then(res=>res.json()); // wait a little bit cuz it will take some time to fetch data
      updatedFetchedData(data);
    })();
  },[api])

  return (
    <div className="App"> 

      <Search setPageNumber={setPageNumber} setSearch={setSearch} />

      <div className="container">
        <div className="row">
           <Filters 
            setSpecies={setSpecies}
            setGender={setGender}
            setStatus={setStatus} 
            setPageNumber={setPageNumber}
          />
          <div className="col-8">
            <div className="row">
              <Cards results={results} />
            </div>
          </div>
        </div>
      </div>

      <Pagination pageNumber={pageNubmer} setPageNumber={setPageNumber}/>
    </div>
  )
}
export default App;


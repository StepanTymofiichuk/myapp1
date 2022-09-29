import { useState, useEffect } from 'react';
import { db } from './config';
import { collection, getDocs, doc } from "firebase/firestore";
import {
  BrowserRouter,
  Routes, //replaces "Switch" used till v5
  Route
} from "react-router-dom";
import Header from './compoonents/Header';
import Home from './compoonents/Home';
import ItEnglish from './compoonents/IEnglish';
import BussinesEnglish from './compoonents/BussinesEnglish';
import LegalEnglish from './compoonents/LegalEnglish';

function App() {
  const [ ITVocabulary, setITVocabulary] = useState([]);
  const [ bussinesVocabulary, setBussinesVocabulary] = useState([]);
  const [ legalVocabulary, setLegalVocabulary] = useState([]);
  const collectionref = collection(db, 'itEnglish');
  const collectionrefBussines = collection(db, 'bussinesEnglish');
  const collectionrefLegal = collection(db, 'legalEnglish');
  useEffect(() => {
    const getData = async () => {
      const myData = await getDocs(collectionref);
      console.log(myData.docs.map((doc) => ({
        ...doc.data()
      })));
      setITVocabulary(myData.docs.map((doc) => ({
        ...doc.data(), id: doc.id
      })));
    }
    const getBussinesEnglish = async () => {
      const myData = await getDocs(collectionrefBussines);
      console.log(myData.docs.map((doc) => ({
        ...doc.data()
      })));
      setBussinesVocabulary(myData.docs.map((doc) => ({
        ...doc.data(), id: doc.id
      })));
    }
    const getLegalEnglish = async () => {
      const myData = await getDocs(collectionrefLegal);
      console.log(myData.docs.map((doc) => ({
        ...doc.data()
      })));
      setLegalVocabulary(myData.docs.map((doc) => ({
        ...doc.data(), id: doc.id
      })));
    }
    getData();
    getBussinesEnglish();
    getLegalEnglish();
  }, [])
  return (
    <BrowserRouter>
      <div>
        <Header />
      </div>
      <Routes>
        <Route path='/' element={<Home 
                  ITVocabulary={ITVocabulary.length}
                  bussinesVocabulary={bussinesVocabulary.length}
                  legalVocabulary={legalVocabulary.length} />} />
        <Route path='/it' element={<ItEnglish ITVocabulary={ITVocabulary} />} />
        <Route path='/bussines' element={<BussinesEnglish bussinesVocabulary={bussinesVocabulary} />} />
        <Route path='/legal' element={<LegalEnglish legalVocabulary={legalVocabulary} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

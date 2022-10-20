import { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Routes, //replaces "Switch" used till v5
  Route
} from "react-router-dom";
import Header from './compoonents/Header';
import Home from './compoonents/Home';
import ItEnglish from './compoonents/IEnglish';
import BusinessEnglish from './compoonents/BusinessEnglish';
import LegalEnglish from './compoonents/LegalEnglish';
import { itEnglish } from './compoonents/resources/it_english';
import { legalEnglish } from './compoonents/resources/legal_english';
import { businessEnglish } from './compoonents/resources/business_english';
function App() {

  useEffect(() => {
    console.log(itEnglish)
    console.log(businessEnglish)
    console.log(legalEnglish)
  }, [])
  return (
    <BrowserRouter>
      <div>
        <Header />
      </div>
      <Routes>
        <Route path='/' element={<Home ITAmount={itEnglish.it_english.length} businessAmount={businessEnglish.business_english.length} legalAmount={legalEnglish.legal_english.length} />} />
        <Route path='/it' element={<ItEnglish ITVocabulary={itEnglish}/>} />
        <Route path='/bussines' element={<BusinessEnglish businessVocabulary={businessEnglish}/>} />
        <Route path='/legal' element={<LegalEnglish legalVocabulary={legalEnglish}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Routes, //replaces "Switch" used till v5
  Route
} from "react-router-dom";
import Header from './compoonents/Header';
import EnglihVocabulary from './compoonents/EnglishVocabulary';
import ITEnglish from './compoonents/ITEnglish';
import ITEnglishStudyMode from './compoonents/ITEnglishStudyMode';
import BusinessEnglish from './compoonents/BusinessEnglish';
import BusinessEnglishStudyMode from './compoonents/BusinessEnglishStudyMode';
import LegalEnglish from './compoonents/LegalEnglish';
import LegalEnglishStudyMode from './compoonents/LegalEnglishStudyMode';
import { itEnglish } from './compoonents/resources/it_english';
import { legalEnglish } from './compoonents/resources/legal_english';
import { businessEnglish } from './compoonents/resources/business_english';
import EnglishGrammar from './compoonents/EnglishGrammar';
import PresentTenses from './compoonents/PresentTenses';
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
        <Route path='/' element={<EnglihVocabulary ITAmount={itEnglish.it_english.length} businessAmount={businessEnglish.business_english.length} legalAmount={legalEnglish.legal_english.length} />} />
        <Route path='/it' element={<ITEnglish ITVocabulary={itEnglish}/>} />
        <Route path='/study-it' element={<ITEnglishStudyMode ITVocabulary={itEnglish}/>} />
        <Route path='/bussines' element={<BusinessEnglish businessVocabulary={businessEnglish}/>} />
        <Route path='/study-bussines' element={<BusinessEnglishStudyMode businessVocabulary={businessEnglish}/>} />
        <Route path='/legal' element={<LegalEnglish legalVocabulary={legalEnglish}/>} />
        <Route path='/study-legal' element={<LegalEnglishStudyMode legalVocabulary={legalEnglish}/>} />
        <Route path="/grammar" element={<EnglishGrammar />} />
        <Route path="/present" element={<PresentTenses />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home';
import Text from '../pages/Text';
import Textvoice from '../pages/Textvoice';
import Voicetext from '../pages/Voicetext';
import PdfPage from '../pages/PdfPage';

const WebRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Navigate to="/text" replace />}/>
        <Route path="/home" element={<Home />} />  
        <Route path="/text" element={<Text />} /> 
        <Route path="/textvoice" element={<Textvoice />} />  
        <Route path="/voicetext" element={<Voicetext />} />  
        <Route path="/pdf" element={<PdfPage />} />   

    </Routes>
  )
}

export default WebRoutes
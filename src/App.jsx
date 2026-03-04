import { Fragment, useState } from 'react'  
import WebRoutes from './router/WebRoutes';
import Header from './components/layouts/header';
import MainContent from './components/Main/MainContent';


function App() {  
    const [activeSide, setActiveSide] = useState(false);

  return (
    <Fragment>
      <div className="content"> 
        <Header activeSide={activeSide} setActiveSide={setActiveSide}/> 
        <MainContent activeSide={activeSide}>
          <WebRoutes />  
        </MainContent> 
      </div> 
    </Fragment>
  )
}

export default App

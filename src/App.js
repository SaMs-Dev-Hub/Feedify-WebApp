import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FeedHeader from './Components/header';
import FeedbackList from './Components/FeedbackList';
import FeedbackStats from './Components/FeedbackStats';
import FeedForm from './Components/FeedForm';
import About from './Pages/About';
import AboutIcon from './Components/AboutIcon';
import { FeedProvider } from './Context/FeedContext';


const App = () => {
    console.log(window.location.pathname);

    return (
        <FeedProvider>
            <Router>
                <FeedHeader text={'Feedify'} />
                <div className={'container'}>
                    <Routes>
                        <Route exact path='/' element={<>
                            <FeedForm />
                            <FeedbackStats />
                            <FeedbackList />

                        </>}>

                        </Route>
                        <Route path='/about' element={<About />}>
                        </Route>
                    </Routes>
                    {window.location.pathname === '/' &&
                        <AboutIcon />}
                </div>
            </Router>
        </FeedProvider>
    )

}


export default App;
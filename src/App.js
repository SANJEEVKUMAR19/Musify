import React,{useState} from 'react';
import MusicDetails from './components/MusicDetails';
import Navigation from './components/Navigation';
import SearchResults from './components/SearchResults';

import './styles/app.css';
import Preload from './Preload';
const App = () => {
  const [done,setDone] = useState(false);
  setTimeout(()=>{
     setDone(true)
  },5000)
	return (
		<div id="app" className="app">
			{!done?(
            <Preload />
			) : (<>
			<header id="header" className="header container-fluid">
				
				<Navigation />
			   
			</header>
			<main className="app-content container-fluid">
				<div className="music-content row">
					<div className="music-content-section search-results-col">
						<SearchResults />
					</div>
					<div className="music-content-section music-detials-col">
						<MusicDetails />
					</div>
				</div>
			</main>
			</>) }
		</div>
	);
};

export default App;
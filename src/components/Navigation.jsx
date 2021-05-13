import { LibraryMusic } from '@material-ui/icons';

import '../styles/components/navigation.css';
import SearchBar from './SearchBar';



const Navigation = () => {
	
	return (
		<nav id="navigation"  className="navigation navbar ">
			<div className="nav-section brand-section">
				<h1 className="app-title">
					 Musify
					 <span className="app-icon">
						<LibraryMusic />
						
			</span>
				</h1>
				
			</div>
			<div className="nav-section search-section">
				<SearchBar />
			</div>
			
		</nav>
	);
};

export default Navigation;
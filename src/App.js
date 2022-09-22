import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';


function App() {
	return (
		<div className="app-wrapper">
			<Header />
			<div className='nav_content'>
				<Navbar />
				<Profile />
			</div>


		</div>
	);
}

export default App;

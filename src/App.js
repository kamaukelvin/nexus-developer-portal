import './App.css';
const { default: Home } = require('pages/home/Home');

function App() {
	return (
		<div className="bg">
			<Home />
		</div>
	);
}

export default App;

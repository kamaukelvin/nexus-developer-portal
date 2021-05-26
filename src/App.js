import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ModulePage from 'pages/modulePage/ModuleLogic';
const { default: Home } = require('pages/home/Home');

function App() {
	return (
		<Router>
			<div className="bg">
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/module" component={ModulePage} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;

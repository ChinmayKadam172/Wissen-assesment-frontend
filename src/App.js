import "./App.css";
import React, { useState } from "react";
import "./App.css";
import Balance from "./components/Balance";
import Deposit from "./components/Deposit";
import Register from "./components/Register";
import Transfer from "./components/Transfer";
import Withdraw from "./components/Withdraw";

function App() {
	const [activeComponent, setActiveComponent] = useState("balance");

	const renderComponent = () => {
		switch (activeComponent) {
			case "balance":
				return <Balance />;
			case "deposit":
				return <Deposit />;
			case "register":
				return <Register />;
			case "transfer":
				return <Transfer />;
			case "withdraw":
				return <Withdraw />;
			default:
				return null;
		}
	};

	return (
		<div className="App">
			<nav
				style={{
					position: "fixed",
					top: 0,
				}}>
				<h1>OUR BANK</h1>
				<button onClick={() => setActiveComponent("balance")}>Balance</button>
				<button onClick={() => setActiveComponent("deposit")}>Deposit</button>
				<button onClick={() => setActiveComponent("register")}>Register</button>
				<button onClick={() => setActiveComponent("transfer")}>Transfer</button>
				<button onClick={() => setActiveComponent("withdraw")}>Withdraw</button>
			</nav>
			{renderComponent()}
		</div>
	);
}

export default App;

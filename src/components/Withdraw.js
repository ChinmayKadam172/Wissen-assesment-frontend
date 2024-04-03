import React, { useState } from "react";

const Deposit = () => {
	const [accountNo, setAccountNo] = useState("");
	const [ifsc, setIfsc] = useState("");
	const [balance, setbalance] = useState("");
	const name = "random";

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await fetch("http://localhost:8687/withdraw", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					accountNo,
					name,
					ifsc,
					balance,
				}),
			});

			if (response.ok) {
				const data = await response.json();
				console.log(data); // Handle the response data here
			} else {
				console.error("Request failed");
			}
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<h2>Withdraw</h2>
			<label>
				Account No:
				<input
					type="number"
					value={accountNo}
					onChange={(e) => setAccountNo(e.target.value)}
				/>
			</label>
			<br />
			<label>
				IFSC:
				<input
					type="text"
					value={ifsc}
					onChange={(e) => setIfsc(e.target.value)}
				/>
			</label>
			<br />
			<label>
				balance:
				<input
					type="number"
					value={balance}
					onChange={(e) => setbalance(e.target.value)}
				/>
			</label>
			<br />
			<button type="submit">Deposit</button>
		</form>
	);
};

export default Deposit;

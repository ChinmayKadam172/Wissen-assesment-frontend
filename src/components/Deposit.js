import React, { useState } from "react";

const Deposit = () => {
	const [accountNo, setAccountNo] = useState("");
	const [ifsc, setIfsc] = useState("");
	const [amount, setAmount] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await fetch("http://localhost:8687/deposit", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					accountNo,
					ifsc,
					amount,
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
			<h2>Deposit</h2>
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
				Amount:
				<input
					type="number"
					value={amount}
					onChange={(e) => setAmount(e.target.value)}
				/>
			</label>
			<br />
			<button type="submit">Deposit</button>
		</form>
	);
};

export default Deposit;

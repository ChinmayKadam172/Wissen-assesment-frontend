import React, { useState } from 'react';

function Register() {
  const [accountNo, setAccountNo] = useState(0);
  const [name, setName] = useState('');
  const [ifsc, setIfsc] = useState('');
  const [balance, setBalance] = useState(0.0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:8687/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ accountNo, name, ifsc, balance }),
    });

    if (response.ok) {
      console.log('Account created');
    } else {
      console.log('Account not created');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <br />
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
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
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
        Balance:
        <input
          type="number"
          value={balance}
          onChange={(e) => setBalance(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;

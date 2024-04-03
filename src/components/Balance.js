import React, { useState } from 'react';

const Balance = () => {
  const [accountNo, setAccountNo] = useState('');
  const [balance, setBalance] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:8687/balance/${accountNo}`)
      .then(response => response.text())
      .then(balance => {
        setBalance(balance);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>
          Account Number:
          <input type="text" value={accountNo} onChange={e => setAccountNo(e.target.value)} />
        </label>
        <button type="submit">Get Balance</button>
      </form>
      <label>Balance: {balance}</label>
    </div>
  );
};

export default Balance;
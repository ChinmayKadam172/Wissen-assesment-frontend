import React, { useState } from 'react';

const Transfer = () => {
  const [fromAccountNo, setFromAccountNo] = useState('');
  const [fromIFSC, setFromIFSC] = useState('');
  const [toAccountNo, setToAccountNo] = useState('');
  const [toIFSC, setToIFSC] = useState('');
  const [amount, setAmount] = useState('');
  const [transactionStatus, setTransactionStatus] = useState('');

  const handleTransfer = async () => {
    try {
      const response = await fetch('http://localhost:8687/transfer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fromAccountNo,
          fromIFSC,
          toAccountNo,
          toIFSC,
          amount,
        }),
      });

      const data = await response.json();

      if (data) {
        setTransactionStatus('Transaction successful');
      } else {
        setTransactionStatus('Transaction failed');
      }
    } catch (error) {
      console.error('Error:', error);
      setTransactionStatus('Transaction failed');
    }
  };

  return (
    <div>
      <h1>Transfer</h1>
      <form>
        <label htmlFor="fromAccountNo">From Account No:</label>
        <input
          type="number"
          id="fromAccountNo"
          value={fromAccountNo}
          onChange={(e) => setFromAccountNo(e.target.value)}
        />

        <label htmlFor="fromIFSC">From IFSC:</label>
        <input
          type="text"
          id="fromIFSC"
          value={fromIFSC}
          onChange={(e) => setFromIFSC(e.target.value)}
        />

        <label htmlFor="toAccountNo">To Account No:</label>
        <input
          type="number"
          id="toAccountNo"
          value={toAccountNo}
          onChange={(e) => setToAccountNo(e.target.value)}
        />

        <label htmlFor="toIFSC">To IFSC:</label>
        <input
          type="text"
          id="toIFSC"
          value={toIFSC}
          onChange={(e) => setToIFSC(e.target.value)}
        />

        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <button type="button" onClick={handleTransfer}>
          Transfer
        </button>
      </form>

      {transactionStatus && (
        <p style={{ color: transactionStatus.includes('successful') ? 'green' : 'red' }}>
          {transactionStatus}
        </p>
      )}
    </div>
  );
};

export default Transfer;
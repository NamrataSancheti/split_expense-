import { useState } from "react";

function App() {
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const [history, setHistory] = useState([]);

  const people = ["Namrata", "Bhakti", "Prajakta"];

  const handleSplit = () => {
    if (!amount) return;

    const perPerson = (Number(amount) / 3).toFixed(2);

    const entry = {
      total: amount,
      perPerson,
      note,
      time: new Date().toLocaleTimeString(),
    };

    setHistory([entry, ...history]);
    setAmount("");
    setNote("");
  };

  return (
    <div style={{ maxWidth: "500px", margin: "40px auto", padding: "20px", border: "1px solid #aaa", borderRadius: "10px" }}>
      <h2 style={{ textAlign: "center" }}>Split Expense Between 3 Friends</h2>

      <div style={{ marginTop: "20px" }}>
        <label>Total Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
          style={{ width: "100%", padding: "8px", marginTop: "5px" }}
        />
      </div>

      <div style={{ marginTop: "15px" }}>
        <label>Note (optional)</label>
        <input
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="For example: Lunch bill"
          style={{ width: "100%", padding: "8px", marginTop: "5px" }}
        />
      </div>

      <button
        onClick={handleSplit}
        style={{
          marginTop: "20px",
          width: "100%",
          padding: "10px",
          background: "#3b82f6",
          border: "none",
          color: "white",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Split Expense
      </button>

      {history.length > 0 && (
        <div style={{ marginTop: "30px" }}>
          <h3>History</h3>
          {history.map((item, index) => (
            <div key={index} style={{ padding: "10px", border: "1px solid #ddd", borderRadius: "8px", marginBottom: "10px" }}>
              <p><strong>Total:</strong> ₹{item.total}</p>
              <p><strong>Each Person Pays:</strong> ₹{item.perPerson}</p>

              <ul style={{ marginLeft: "15px" }}>
                {people.map((name) => (
                  <li key={name}>{name}: ₹{item.perPerson}</li>
                ))}
              </ul>

              {item.note && <p><strong>Note:</strong> {item.note}</p>}
              <p style={{ fontSize: "12px", color: "#555" }}>Added at: {item.time}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;

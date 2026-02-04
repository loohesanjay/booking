import { useState } from "react";
import RoomList from "./RoomList";
import Filter from "./Filter";

function App() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [filter, setFilter] = useState("All");

  return (
    <div className="container">
      <h1>Hotel Booking Website</h1>

      <label>Check In: </label>
      <input type="date" onChange={(e) => setCheckIn(e.target.value)} />

      <label style={{ marginLeft: "10px" }}>Check Out: </label>
      <input type="date" onChange={(e) => setCheckOut(e.target.value)} />

      <br /><br />

      <Filter setFilter={setFilter} />

      <RoomList 
        checkIn={checkIn}
        checkOut={checkOut}
        filter={filter}
      />
    </div>
  );
}

export default App;

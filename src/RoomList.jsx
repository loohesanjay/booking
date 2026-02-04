const rooms = [
  { id: 1, type: "Single", price: 50 },
  { id: 2, type: "Double", price: 80 },
  { id: 3, type: "Suite", price: 150 },
  { id: 4, type: "Single", price: 60 },
];

function RoomList({ checkIn, checkOut, filter }) {

  const filteredRooms = rooms.filter(room => {
    if (filter === "All") return true;
    return room.type === filter;
  });

  return (
    <div>
      <h2>Available Rooms</h2>

      {(!checkIn || !checkOut) && (
        <p>📅 Please select check-in and check-out dates</p>
      )}

      {checkIn && checkOut && filteredRooms.map(room => (
        <div key={room.id} className="room-card">
          <h3>{room.type} Room</h3>
          <p>Price: ${room.price} / night</p>
          <button>Book Now</button>
        </div>
      ))}
    </div>
  );
}

export default RoomList;

import React, { useState, useEffect } from "react";
import { bookAppointment, getCounsellorAvailability } from "../services/appointmentApi";
import { useParams } from "react-router-dom";
import "../styles/SlotBookingForm.css";

export default function SlotBookingForm() {
  const { counsellorId } = useParams();
  const [counsellor, setCounsellor] = useState(null);
  const [availability, setAvailability] = useState([]);
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedSlots, setSelectedSlots] = useState([]);
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch counsellor details and availability
        const data = await getCounsellorAvailability(counsellorId);
        setCounsellor(data.counsellor);
        setAvailability(data.availability);
        
        // Set the first available day as selected by default
        if (data.availability.length > 0) {
          setSelectedDay(data.availability[0].date);
        }
        
        setLoading(false);
      } catch (err) {
        setError("Failed to load availability");
        setLoading(false);
        console.error(err);
      }
    };

    fetchData();
  }, [counsellorId]);

  const handleSlotSelect = (slot) => {
    setSelectedSlots(prev => {
      if (prev.includes(slot)) {
        return prev.filter(s => s !== slot);
      } else {
        return [...prev, slot];
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedSlots.length === 0) {
      alert("Please select at least one time slot");
      return;
    }

    try {
      // Book all selected slots
      await Promise.all(
        selectedSlots.map(slotId => 
          bookAppointment(parseInt(slotId), feedback)
        )
      );
      alert("Appointment booked successfully!");
      // Reset form after successful booking
      setSelectedSlots([]);
      setFeedback("");
    } catch (err) {
      alert("Booking failed. Please try again.");
      console.error(err);
    }
  };

  if (loading) return <div className="booking-container">Loading...</div>;
  if (error) return <div className="booking-container">{error}</div>;
  if (!counsellor) return <div className="booking-container">Counsellor not found</div>;

  const currentDayAvailability = availability.find(day => day.date === selectedDay);

  return (
    <div className="booking-container">
      <div className="counsellor-header">
        <img 
          className="counsellor-image"
          src={counsellor.profileImage || "/default-profile.jpg"} 
          alt={counsellor.name}
        />
        <div>
          <h2>Book Session with {counsellor.name}</h2>
          <p>{counsellor.specialization}</p>
          <p>⭐ {counsellor.rating || "No ratings yet"}</p>
        </div>
      </div>

      <h3>Select Available Time Slots</h3>
      
      <div className="day-selector">
        {availability.map(day => (
          <button
            key={day.date}
            className={`day-button ${selectedDay === day.date ? 'selected' : ''}`}
            onClick={() => setSelectedDay(day.date)}
          >
            {new Date(day.date).toLocaleDateString('en-US', {
              weekday: 'short',
              month: 'short',
              day: 'numeric'
            })}
          </button>
        ))}
      </div>

      {currentDayAvailability && (
        <>
          <div className="time-slots-container">
            {currentDayAvailability.slots.map(slot => (
              <button
                key={slot.id}
                className={`time-slot ${selectedSlots.includes(slot.id) ? 'selected' : ''} ${!slot.available ? 'disabled' : ''}`}
                onClick={() => slot.available && handleSlotSelect(slot.id)}
                disabled={!slot.available}
              >
                {new Date(slot.startTime).toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="feedback">Additional Notes (Optional)</label>
              <textarea
                id="feedback"
                className="form-control"
                rows="3"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Any specific concerns or preferences..."
              ></textarea>
            </div>

            <div className="submit-container">
              <button 
                type="submit" 
                className="submit-button"
                disabled={selectedSlots.length === 0}
              >
                Book Selected Slots ({selectedSlots.length})
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}
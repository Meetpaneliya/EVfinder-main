/* eslint-disable no-lone-blocks */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const EvChargingBookingForm = ({ onCountChange}) => {

  const navigate = useNavigate();
  // State variables to store form data
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [count, setCount] = useState(0);

  const deletionTime = 5000;
  const totalCount = 5;
  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', { name, email, phone, date, time });

    if (count < totalCount) {
      setCount(prevCount => prevCount + 1);
    }

    setTimeout(() => {
      if (count > 0) {
        setCount(prevCount => prevCount - 1);
        onCountChange({ count: count - 1});
      }
    }, deletionTime);


  // Reset form fields after submission
  setName('');
  setEmail('');
  setPhone('');
  setDate('');
  setTime('');
  navigate("/mainpage");
};

return (
  <>
    <div className="max-w-md mx-auto p-6 color-white rounded-md shadow-md mt-20 bg-gray-600">
      <h2 className="text-xl font-semibold mb-4 text-black">EV Charging Station Booking</h2>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">
          <span className="text-gray-900">Name:</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="block w-full mt-1 p-2 border rounded-md focus:outline-none focus:border-blue-500 bg-slate-400"
          />
        </label>
        <label className="block mb-2">
          <span className="text-gray-900">Email:</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="block w-full mt-1 p-2 border rounded-md focus:outline-none focus:border-blue-500 bg-slate-400"
          />
        </label>
        <label className="block mb-2">
          <span className="text-gray-900">Phone:</span>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="block w-full mt-1 p-2 border rounded-md focus:outline-none focus:border-blue-500 bg-slate-400"
          />
        </label>
        <label className="block mb-2">
          <span className="text-gray-900">Date:</span>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className="block w-full mt-1 p-2 border rounded-md focus:outline-none focus:border-blue-500 bg-slate-400"
          />
        </label>
        <label className="block mb-2">
          <span className="text-gray-900">Time:</span>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
            className="block w-full mt-1 p-2 border rounded-md focus:outline-none focus:border-blue-500 bg-slate-400"
          />
        </label>
        <button
          type="submit"
          className="block w-full mt-4 bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Book Slot
        </button>
        <p className='mt-5 '>Connection: {count} out of {totalCount}</p>
      </form>
    </div>
    {/* <Card cout={count} totalCount={totalCount}/> */}
  </>
   
);
};

export default EvChargingBookingForm;

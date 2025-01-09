import React, { useState } from 'react';
import Display from './Display';

const UserData = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const[submittedData,setSubmittedData] = useState([]);

  const handleSubmit = () => {
     

    setSubmittedData((prevData)=> [...prevData,data])
    


    setData({
      name: '',
      email: '',
      message: '',
    });
  };

  const handleForm = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  

  return (
    <div className="bg-gray-100 container mx-auto flex flex-col justify-center items-center py-12 mt-6 rounded-lg shadow">
      <h1 className="font-serif text-blue-500 text-lg mb-3 font-bold">
        Enter Your Details
      </h1>
      <p className="m-1 text-center text-sm hover:underline text-blue-600 p-1">
        We'd love to hear from you! Fill out your details and drop us a message. We'll get back to you as soon as possible.
      </p>
      <form onSubmit={handleForm} className="m-2 p-4 bg-gray-50 rounded-xl shadow  flex flex-col items-center">
        <div className="m-2 flex gap-1">
          <label htmlFor="name" className="text-blue-800 text-[18px] font-serif">
            Name:
          </label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={data.name}
            className="input-flied"
          />
        </div>

        <div className="flex gap-1">
          <label htmlFor="email" className="text-blue-800 text-[18px] font-serif">
            Email:
          </label>
          <input
            type="text"
            name="email"
            onChange={handleChange}
            value={data.email}
            className="input-flied"
          />
        </div>

        <div className="flex gap-1">
          <label htmlFor="message" className="text-blue-800 text-[18px] font-serif">
            Message:
          </label>
          <textarea
            name="message"
            value={data.message}
            onChange={handleChange}
            className="input-flied"
          ></textarea>
        </div>
      </form>
      <div className="mt-4">
        <button
          className="px-6 py-2 bg-indigo-600 rounded-lg text-blue-200 font-mono text-[18px] hover:bg-indigo-500 active:bg-blue-700"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>

      {submittedData.length>0 && (
          <>
            
         <div class="w-[70%] my-4 h-[2px] bg-gray-300 shadow-md rounded-lg"></div>

         <Display submittedData={submittedData} />
          
        </>
      )}
    </div>
  );
};

export default UserData;

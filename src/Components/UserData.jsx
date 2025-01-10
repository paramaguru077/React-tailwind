import React, { useState } from 'react';
import Display from './Display';

const UserData = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const[submittedData,setSubmittedData] = useState([]);
  const [error,setError]= useState({});
  

  const validate =()=>{
    let isValidate ={};
    if(data.name.trim()===""){
      isValidate.name="name is required";
    }
    const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(data.email===""){
      isValidate.email="Email is required";
    }
    else if(!reg.test(data.email)){
       isValidate.email="Enter validate email";
    }
    if(data.message.trim()===""){
      isValidate.message="Message is reqired";

    }
    return isValidate;
  };

  const handleDelete = (index)=>{
    setSubmittedData((prevData)=> prevData.filter(
      (_,i)=> index!==i
    ));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
     
    const checkValidate  =  validate();
    if(Object.keys(checkValidate).length>0){
      setError(checkValidate);
      

    }
    else{
      setError({});
      setSubmittedData((prevData)=> [...prevData,data])
    setData({
      name: '',
      email: '',
      message: '',
    });
    }

    
  };

  
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  

  return (
    <>
    <div className="bg-gray-100 container mx-auto flex flex-col justify-center items-center py-12 mt-6 rounded-lg shadow w-[90%] sd:w-full">
      <h1 className="font-serif text-blue-500 text-lg mb-3 font-bold">
        Enter Your Details
      </h1>
      <p className="m-1 text-center text-sm hover:underline text-blue-600 p-1 font-medium">
         Fill out your details.
      </p>
      <form onSubmit={handleSubmit} className="m-2 p-4 bg-gray-50 rounded-xl shadow  flex flex-col items-center w-full sm:w-3/4 md:w-1/2 lg:w-1/3">
        <div className="m-2 flex    gap-1">
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
         <div >
         {error.name && <p className='text-red-700 text-[13px]'> {error.name}</p>}
         </div>
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
          {error.email && <p className='text-red-700 text-[13px]'> {error.email}</p>}
        </div>

        <div className="flex gap-1">
          <label htmlFor="message" className="text-blue-800 text-[18px] font-serif">
            Message:
          </label>
          <textarea style={{maxWidth:'300px', maxHeight:"150px"}}
            name="message"
            value={data.message}
            onChange={handleChange}
            className="input-flied"
          ></textarea>
          {error.message && <p className='text-red-700 text-[13px]'> {error.message}</p>}
        </div>
        <div className="mt-4">
        <button
          className="px-6 py-2 bg-indigo-600 rounded-lg text-blue-200 font-mono text-[18px] hover:bg-indigo-500 active:bg-blue-700"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div> 
      </form>
      
    </div>
    {submittedData && (
          <>
            
         <div class="w-[50%] my-4 ml-[25%] h-[2px] bg-gray-300 shadow-md rounded-lg flex justify-center"></div>

         <Display submittedData={submittedData} handleDelete={handleDelete} />
          
        </>
      )}
    </>

  );
};

export default UserData;

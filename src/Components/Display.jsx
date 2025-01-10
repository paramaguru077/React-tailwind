import React from 'react'

const Display = ({ submittedData , handleDelete}) => {
  return (
    <>
      <div className="overflow-auto rounder-lg shadow  w-full hidden  sm:flex justify-center">
        {submittedData && submittedData.length ? (
          <table className="w-8/12  sm:10/12 m-4 table-auto border-collapse border border-blue-300 shadow-md">
            <thead className="bg-blue-100">
              <tr>
                <th className="py-2 px-4 text-left font-semibold text-blue-700 border-b border-blue-300">Name</th>
                <th className="py-2 px-4 text-left font-semibold text-blue-700 border-b border-blue-300">Email</th>
                <th className="py-2 px-4 text-left font-semibold text-blue-700 border-b border-blue-300">Message</th>
                <th className="py-2 px-4 text-left font-semibold text-blue-700 border-b border-blue-300">Action</th>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-400' >
              {submittedData.map((val, i) => (
                <tr key={i} className="hover:bg-blue-50">
                  <td className="py-2 px-4 border-b border-blue-300 font-serif">{val.name}</td>
                  <td className="py-2 px-4 border-b border-blue-300">{val.email}</td>
                  <td className="py-2 px-4 border-b border-blue-300">{val.message}</td>
                  <button className='px-3 bg-red-600 text-md text-white m-1 border-1 border-red-500 rounded-xl ring-1 active:bg-red-500' onClick={()=>handleDelete(i)}>Delete</button>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-blue-600">No data available</p>
        )}
      </div>
      <div className=' container x-auto  grid grid-cols-1  gap-4 sm:hidden'>
        {
          submittedData.map((val,i)=>(
             <div className=" bg-white p-4 rounded-lg shadow border-2 border-indigo-200 m-4 " key={i}>
              <div className='flex flex-col items-center space-x-2 text-sm'>
                <div className='text-left font-serif text-lg text-gray-500 hover:underline uppercase'>{val.name}</div>
                <div className='text-lg text-gray-600 tracking-wide'>{val.email}</div>
                <div className='text-lg text-gray-700 tracking-wide'>{val.message}</div>
                <div><button className='px-3 bg-red-600 text-md text-white m-1 border-1 border-red-500 rounded-xl ring-1 active:bg-red-500' onClick={()=> handleDelete(i)}>Delete</button></div>

              </div>


              </div>
          ))
        }


      </div>
    </>
  )
}

export default Display

import React from 'react'

const Display = ({ submittedData }) => {
  return (
    <div className="overflow-x-auto mt-4">
      {submittedData && submittedData.length ? (
        <table className="min-w-full table-auto border-collapse border border-blue-300 shadow-md">
          <thead className="bg-blue-100">
            <tr>
              <th className="py-2 px-4 text-left font-semibold text-blue-700 border-b border-blue-300">Name</th>
              <th className="py-2 px-4 text-left font-semibold text-blue-700 border-b border-blue-300">Email</th>
              <th className="py-2 px-4 text-left font-semibold text-blue-700 border-b border-blue-300">Message</th>
            </tr>
          </thead>
          <tbody>
            {submittedData.map((val, i) => (
              <tr key={i} className="hover:bg-blue-50">
                <td className="py-2 px-4 border-b border-blue-300">{val.name}</td>
                <td className="py-2 px-4 border-b border-blue-300">{val.email}</td>
                <td className="py-2 px-4 border-b border-blue-300">{val.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-blue-600">No data available</p>
      )}
    </div>
  )
}

export default Display

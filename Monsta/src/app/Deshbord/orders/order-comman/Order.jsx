import React from 'react'

export default function Order() {
     const orders = [
    {
      id: 1,
      date: 'May 10, 2018',
      status: 'Completed',
      total: 'Rs. 25.00 For 1 Item',
    },
    {
      id: 2,
      date: 'May 10, 2018',
      status: 'Processing',
      total: 'Rs. 17.00 For 1 Item',
    },
  ];
  return (
    <div className="w-full">
      <h1 className="text-4xl font-bold mb-6">Orders</h1>
      
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          {/* Table Header */}
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left py-4 px-6 font-semibold text-gray-700 border-b-2 border-gray-300">
                Order
              </th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700 border-b-2 border-gray-300">
                Date
              </th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700 border-b-2 border-gray-300">
                Status
              </th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700 border-b-2 border-gray-300">
                Total
              </th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700 border-b-2 border-gray-300">
                Actions
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-5 px-6 text-gray-900 font-medium">
                  {order.id}
                </td>
                <td className="py-5 px-6 text-gray-900">
                  {order.date}
                </td>
                <td className="py-5 px-6 text-gray-900">
                  {order.status}
                </td>
                <td className="py-5 px-6 text-gray-900">
                  {order.total}
                </td>
                <td className="py-5 px-6">
                  <button className="text-amber-600 hover:text-amber-700 font-medium">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
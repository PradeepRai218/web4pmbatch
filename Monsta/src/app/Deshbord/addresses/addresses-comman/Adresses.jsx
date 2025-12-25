export default function Addresses() {
  return (
    <div className="w-full">
      <p className="text-gray-600 mb-6">
        The following addresses will be used on the checkout page by default.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Billing Address Section */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-6">Billing Address</h2>

          <div className="space-y-4">
            {/* Billing Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Billing Name*
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>

            {/* Billing Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Billing Email*
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>

            {/* Billing Mobile Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Billing Mobile Number*
              </label>
              <input
                type="tel"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>

            {/* Billing Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Billing Address*
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>

            {/* Country */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Country*
              </label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-gray-500">
                <option>Select Country</option>
                <option>United States</option>
                <option>United Kingdom</option>
                <option>India</option>
                <option>Canada</option>
              </select>
            </div>

            {/* State */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                State*
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>

            {/* City */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                City*
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Update Button */}
          <div className="mt-6 flex justify-end">
            <button className="px-8 py-2 bg-[#C09578] text-white rounded-full hover:bg-[#a67d61] transition-colors">
              UPDATE
            </button>
          </div>
        </div>

        {/* Shipping Address Section */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-6">Shipping Address</h2>

          <div className="space-y-4">
            {/* Shipping Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Shipping Name*
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>

            {/* Shipping Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Shipping Email*
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>

            {/* Shipping Mobile Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Shipping Mobile Number*
              </label>
              <input
                type="tel"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>

            {/* Shipping Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Shipping Address*
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>

            {/* Country */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Country*
              </label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-gray-500">
                <option>Select Country</option>
                <option>United States</option>
                <option>United Kingdom</option>
                <option>India</option>
                <option>Canada</option>
              </select>
            </div>

            {/* State */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                State*
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>

            {/* City */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                City*
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Update Button */}
          <div className="mt-6 flex justify-end">
            <button className="px-8 py-2 bg-[#C09578] text-white rounded-full hover:bg-[#a67d61] transition-colors">
              UPDATE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
const BillCard = () => {
  return (
    <>
      <div className="p-4 space-y-4 border-2 border-gray-100 rounded-md hover:border-gray-200 ">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800 ">Bill Details</h1>
        </div>
        <hr />
        <div className="space-y-2">
          <h3 className="font-semibold text-gray-700">Items</h3>
          <div className="flex justify-between">
            <p className="text-sm text-gray-600">Jelebi</p>
            <p className="text-sm text-gray-600">2 x 150₹</p>
          </div>
        </div>
        <div className="flex justify-between">
          <h3 className="font-semibold text-gray-700">Delivery Fee</h3>
          <h3 className="font-semibold text-gray-700">60₹</h3>
        </div>
        <div className="flex justify-between">
          <h3 className="font-semibold text-gray-700">Taxes and Charges</h3>
          <h3 className="font-semibold text-gray-700">60000000₹</h3>
        </div>
        <hr />
        <div className="flex justify-between">
          <h3 className="font-semibold text-gray-800">To pay</h3>
          <h3 className="font-semibold text-gray-800">69420₹</h3>
        </div>
      </div>
    </>
  );
};

export default BillCard;

import CarerProfileHeader from "./CarerProfileHeader";

const CarerNotifactions = () => {
  const list = [
    {
      name: "Mohamed Khalid",
      location: "5th Settlement, egypt",
      phone: "01023659988",
      date: "15/6  - 3AM, 15 DAYS",
    },
    {
      name: "Mohamed Khalid",
      location: "5th Settlement, egypt",
      phone: "01023659988",
      date: "15/6  - 3AM, 15 DAYS",
    },
    {
      name: "Mohamed Khalid",
      location: "5th Settlement, egypt",
      phone: "01023659988",
      date: "15/6  - 3AM, 15 DAYS",
    },
  ];
  return (
    <section className="container mx-auto px-4 py-16">
      <CarerProfileHeader />
      <div className="flex flex-col justify-center border-2 border-[#BBD0FF] rounded-xl px-4 lg:px-[50px] py-12 lg:w-[80%] mx-auto">
        <div className="flex flex-col gap-6">
          {list.map((item, index) => (
            <div key={index}>
              <div className="bg-[#f6f3ef] p-4 rounded-xl text-navyColor mb-4">
                <p className="font-semibold text-xl mb-2">
                  Name: <span className="font-medium">{item.name}</span>
                </p>
                <p className="font-semibold text-xl mb-2">
                  Location: <span className="font-medium">{item.location}</span>
                </p>
                <p className="font-semibold text-xl mb-2">
                  Phone: <span className="font-medium">{item.phone}</span>
                </p>
                <p className="font-semibold text-xl">
                Date And Duration: <span className="font-medium">{item.date}</span>
                </p>
              </div>
              <div className="flex justify-end gap-6">
                <button className="capitalize border-[#8D99AE] hover:border-[#BBD0FF] text-[#8D99AE] py-2 w-[120px] rounded-xl font-[500] border hover:text-[#003049] duration-200 text-center">Cancel</button>
                <button className="capitalize bg-accent hover:bg-red-700 duration-200 text-white py-2 w-[120px] rounded-xl font-[500] border border-accent text-center">Approve</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarerNotifactions;

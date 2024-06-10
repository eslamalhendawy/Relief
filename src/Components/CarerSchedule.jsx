import CarerProfileHeader from "./CarerProfileHeader";

const CarerSchedule = () => {
  const list = [
    {
      name: "Mohamed Khalid",
      location: "5th Settlement, egypt",
      phone: "01023659988",
      date: "15/6  - 3AM",
    },
    {
      name: "Mohamed Khalid",
      location: "5th Settlement, egypt",
      phone: "01023659988",
      date: "15/6  - 3AM",
    },
    {
      name: "Mohamed Khalid",
      location: "5th Settlement, egypt",
      phone: "01023659988",
      date: "15/6  - 3AM",
    },
  ];
  return (
    <section className="container mx-auto px-4 py-16">
      <CarerProfileHeader />
      <div className="flex flex-col justify-center border-2 border-[#BBD0FF] rounded-xl px-4 lg:px-[50px] py-12 lg:w-[80%] mx-auto">
        <div className="flex flex-col gap-4">
          {list.map((item, index) => (
            <div className="bg-[#f6f3ef] p-4 rounded-xl text-navyColor" key={index}>
              <p className="font-semibold text-xl">
                Name: <span className="font-medium">{item.name}</span>
              </p>
              <p className="font-semibold text-xl">
                Location: <span className="font-medium">{item.location}</span>
              </p>
              <p className="font-semibold text-xl">
                Phone: <span className="font-medium">{item.phone}</span>
              </p>
              <p className="font-semibold text-xl">
                Date Of Session: <span className="font-medium">{item.date}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarerSchedule;

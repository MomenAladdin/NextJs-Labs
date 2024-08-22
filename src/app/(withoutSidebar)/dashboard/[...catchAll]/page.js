const Dashboard = ({ params }) => {
  let arr = params.catchAll;
  console.log(arr);

  return (
    <div className="">
      <div className="flex justify-center align-center mt-6 mb-5">
        <p>Welcome to your dashboard!</p>
      </div>
      <div>
        {arr.map((item) => (
          <div
            key={item}
            className="font-bold flex justify-center mt-4 text-3xl"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

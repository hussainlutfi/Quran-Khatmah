import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState<number>(0);

  useEffect(() => {
    // const date: Date = new Date("2024-05-28");
    const dateNumber: number = 308;

    setNumber(dateNumber);
  }, []);

  // function CalculateDate(startDate: Date): number {
  //   const todayDate: Date = new Date();
  //   return Math.floor(
  //     //wrong
  //     todayDate.getTime() - startDate.getTime() / (1000 * 3600 * 24)
  //   );
  // }

  return (
    <div className="flex justify-center content-center items-center sm:flex-col">
      <div>
        <h1 className="text-3xl font-bold mr-[30px]">Hussain Lutfi</h1>
        <h1 className="text-2xl">{number}</h1>
      </div>
      <div>
        <h1 className="text-3xl font-bold">Ali Wajdi</h1>
        <h1 className="text-2xl">{number + 1}</h1>
      </div>
    </div>
  );
}

export default App;

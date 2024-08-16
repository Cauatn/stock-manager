import { DashBoardBarChart } from "@/components/charts/bar-chart";
import { DashBoardLineChart } from "@/components/charts/line-chart";

export default function Stock() {
  return (
    <div className="w-full">
      {/* <Navbar title="asd" /> */}
      <div className="z-10 w-full max-w-7xl justify-between text-sm lg:flex flex-col gap-10 py-10 px-10 m-auto">
        <h1 className="text-4xl">DashBoard</h1>
        <div className="grid grid-cols-2 grid-rows-2">
          <DashBoardBarChart />
          <div className="col-span-2 row-span-2">
            <DashBoardLineChart />
          </div>
        </div>
      </div>
    </div>
  );
}

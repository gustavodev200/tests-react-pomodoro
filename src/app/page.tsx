import { PomodoroStatusIndicator } from "./components";

export default function Home() {
  return (
    <main className="flex w-full h-screen bg-red-50 items-center justify-center flex-col">
      <PomodoroStatusIndicator />
      <div className=" text-red-900 ">
        <span className="flex flex-col  text-[256px]  font-light">
          25<span className="-mt-40">00</span>
        </span>
      </div>
    </main>
  );
}

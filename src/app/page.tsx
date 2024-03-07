import Image from "next/image";
import Link from "next/link";
import { PomodoroStatusIndicator } from "./components";

export default function Home() {
  return (
    <main className="flex w-full h-screen bg-red-50 items-center justify-center">
      <PomodoroStatusIndicator />
    </main>
  );
}

import { Link } from "react-router-dom";
import { User } from "lucide-react";

export default function Header() {
  function getGreeting() {
    const now = new Date();
    const hours = now.getHours();
    let greeting;
    if (hours < 12) {
      greeting = "Good Morning!";
    } else if (hours < 18) {
      greeting = "Good Afternoon!";
    } else {
      greeting = "Good Evening!";
    }
    return greeting;
  }
  return (
    <div className="w-full fixed top-0 right-0 z-30 bg-white flex items-center justify-between py-[10px] px-[28px]">
      <span className="flex flex-col items-start justify-center text-textPrimary">
        <p className="text-xl font-bold">Hi, Nahom</p>
        <p className="text-xs">{getGreeting()}</p>
      </span>
      <span className="flex items-center justify-center gap-3">
        <Link to="/awud-telegram-mini-app/settings">
          <User className="w-10 h-10 p-2 rounded-full text-textPrimary bg-gray-200" />
        </Link>
      </span>
    </div>
  );
}

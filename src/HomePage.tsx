import DefaultLayout from "./components/layout/DefaultLayout";
import { QrCode, Utensils } from "lucide-react";
import BalanceCard from "./components/BalanceCard";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigator = useNavigate();
  return (
    <DefaultLayout>
      <div className="flex flex-col items-center gap-10 px-10 h-screen w-full">
        <BalanceCard />
        <button
          onClick={() => navigator("/scan")}
          className="bg-green-400 shadow-xl flex flex-col justify-center items-center rounded-full p-20"
        >
          <QrCode size={60} className="text-white" />
          <p className="text-white text-xs text-center font-bold">
            Scan Qr-Code
          </p>
        </button>
        <button className="bg-green-800 shadow-xl fixed bottom-10 right-5 text-white p-5 rounded-full flex flex-col items-center ">
          <Utensils size={20} />
          <p className="text-xs">Menu</p>
        </button>
      </div>
    </DefaultLayout>
  );
}

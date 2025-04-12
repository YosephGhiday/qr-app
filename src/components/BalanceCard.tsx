import { Eye, EyeClosed, Asterisk } from "lucide-react";
import { useState } from "react";

function AsteriskRow() {
  return (
    <span className="flex items-center justify-center">
      <Asterisk size={15} />
      <Asterisk size={15} />
      <Asterisk size={15} />
      <Asterisk size={15} />
    </span>
  );
}

export default function BalanceCard() {
  const [isShowingTotalBalance, setIsShowingTotalBalance] =
    useState<boolean>(false);

  return (
    <div className="w-full py-[16px] px-[16px] border rounded-md shadow-md bg-white border-[#D9EACF] overflow-hidden relative">
      <span className="absolute w-70 h-70 bg-white border bottom-[-40px] right-[-70px] border-green-400 rounded-full flex items-center justify-center">
        <span className="w-60 h-60 bg-[#F6FBF9]  rounded-full"></span>
      </span>
      <span className="flex w-full z-10 justify-between gap-5 items-center">
        <span className="flex flex-col z-10  items-start  w-1/2">
          <p className="text-textSecondary text-sm">Loyalty points</p>
          <span className="font-extrabold text-lg flex items-center justify-between w-full">
            <p className="flex gap-2">
              ETB {isShowingTotalBalance ? "1,000" : <AsteriskRow />}
            </p>
            <button
              onClick={() => setIsShowingTotalBalance(!isShowingTotalBalance)}
            >
              {isShowingTotalBalance ? (
                <EyeClosed size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>
          </span>
        </span>
      </span>
    </div>
  );
}

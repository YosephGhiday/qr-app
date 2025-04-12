import { QR } from "../interface/Qr";
import {
  X,
  WavesLadder,
  Check,
  Banknote,
  Coins,
  Utensils,
  Gift,
  Bed,
} from "lucide-react";
import { useModal } from "../context/ModalContext";
import { useState } from "react";
import TelebirrImage from "../assets/telebirr.png";

interface ScanDetailModalProps {
  qr: QR;
}

export default function ScanDetail({ qr }: ScanDetailModalProps) {
  const { closeModal } = useModal();

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<
    "TELEBIRR" | "CASH" | "POINTS" | null
  >(null);

  const handleSubmit = () => {
    if (selectedPaymentMethod != null && qr.service != "REWARD") {
      console.log(selectedPaymentMethod);
      console.log(qr);
      closeModal();
      window.history.back();
      return;
    }

    closeModal();
    window.history.back();
  };

  return (
    <div className="bg-white rounded-lg p-5">
      <div className="flex w-full items-end justify-end">
        <X onClick={closeModal} size={26} />
      </div>
      <div className="flex w-full flex-col gap-2 justify-center items-center">
        <div className="flex mb-5 w-full items-center justify-center gap-2">
          <span
            className={`bg-gray-200 ${
              qr.service === "ACTIVITY"
                ? "text-blue-400"
                : qr.service === "FOOD"
                ? "text-green-400"
                : qr.service === "REWARD"
                ? "text-indigo-400"
                : "text-amber-400"
            } rounded-full p-2`}
          >
            {qr.service === "ACTIVITY" ? (
              <WavesLadder />
            ) : qr.service === "FOOD" ? (
              <Utensils />
            ) : qr.service === "REWARD" ? (
              <Gift />
            ) : (
              <Bed />
            )}
          </span>
          <p className="text-lg">{qr.name}</p>
        </div>
        {qr.service === "REWARD" ? (
          <div className="w-full">
            <p className="text-lg px-5 text-center">
              Congratulations!!🎉🎉 You have won:
              <br /> {qr.amountInPoints} Points
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <div className="flex w-full px-5 items-center justify-between">
              <p className="text-sm font-bold">Amount:</p>
              <p className="text-sm text-gray-700">
                ETB {qr.amount?.toLocaleString()}
              </p>
            </div>
            <div className="flex w-full px-5 items-center justify-between">
              <p className="text-sm font-bold">Point:</p>
              <p className="text-sm text-gray-700">
                ETB {qr.amountInPoints?.toLocaleString()}
              </p>
            </div>
            <div className="flex flex-col py-5 gap-2 w-full overflow-y-scroll">
              <div
                onClick={() => {
                  setSelectedPaymentMethod("TELEBIRR");
                }}
                className="bg-white mx-w-[200px] border border-gray-300 rounded-lg p-5 gap-1 flex justify-between items-center"
              >
                <span className="gap-4 flex item-center">
                  <img src={TelebirrImage} className="w-10 h-10" />
                  <span className="flex flex-col items-start justify-start">
                    <p className="text-sm text-textPrimary font-bold">
                      Telebirr
                    </p>
                    <p className="text-sm text-textSecondary">
                      Pay using telebirr
                    </p>
                  </span>
                </span>
                <Check
                  className={`w-6 h-6 p-1 rounded-full ${
                    selectedPaymentMethod == "TELEBIRR"
                      ? "bg-green-500"
                      : " bg-gray-200"
                  } text-white `}
                />
              </div>

              <div
                onClick={() => {
                  setSelectedPaymentMethod("CASH");
                }}
                className="bg-white mx-w-[200px] border border-gray-300 rounded-lg p-5 gap-1 flex justify-between items-center"
              >
                <span className="gap-4 flex items-center">
                  <Banknote className="w-7 h-7 mx-2 text-textPrimary" />
                  <span className="flex flex-col items-start justify-start">
                    <p className="text-sm text-textPrimary font-bold">Cash</p>
                    <p className="text-sm text-textSecondary">Pay using cash</p>
                  </span>
                </span>
                <Check
                  className={`w-6 h-6 p-1 rounded-full ${
                    selectedPaymentMethod == "CASH"
                      ? "bg-green-500"
                      : " bg-gray-200"
                  } text-white `}
                />
              </div>
              <div
                onClick={() => {
                  setSelectedPaymentMethod("POINTS");
                }}
                className="bg-white mx-w-[200px] border border-gray-300 rounded-lg p-5 gap-1 flex justify-between items-center"
              >
                <span className="gap-4 flex items-center">
                  <Coins className="w-7 h-7 mx-2 text-textPrimary" />
                  <span className="flex flex-col items-start justify-start">
                    <p className="text-sm text-textPrimary font-bold">Points</p>
                    <p className="text-sm text-textSecondary">
                      Pay with loyalty points
                    </p>
                  </span>
                </span>
                <Check
                  className={`w-6 h-6 p-1 rounded-full ${
                    selectedPaymentMethod == "POINTS"
                      ? "bg-green-500"
                      : " bg-gray-200"
                  } text-white `}
                />
              </div>
            </div>
          </div>
        )}
        <button
          onClick={handleSubmit}
          disabled={qr.service != "REWARD" && selectedPaymentMethod == null}
          className="bg-green-500 p-2 w-full text-lg text-white rounded-md "
        >
          Continue
        </button>
      </div>
    </div>
  );
}

import { Scanner } from "@yudiel/react-qr-scanner";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useModal } from "../context/ModalContext";
import ScanDetail from "../components/ScanDetailModal";

export default function ScanPage() {
  const navigator = useNavigate();
  const { showModal } = useModal();

  const showScanDetailModal = (data: any) => {
    showModal({ isCustom: true, modal: <ScanDetail qr={data} /> });
  };

  return (
    <div className="">
      <button
        onClick={() => navigator(-1)}
        className="bg-white z-10 border shadow-xl fixed top-10 left-5 text-green-500 p-5 rounded-full"
      >
        <ArrowLeft size={20} />
      </button>
      <Scanner
        constraints={{
          //   facingMode: { exact: "environment" },
          facingMode: { ideal: "environment" },
        }}
        styles={{
          container: {
            width: "100%",
            marginTop: "25vh",
          },
        }}
        onScan={(result) => {
          showScanDetailModal(JSON.parse(result[0].rawValue));
        }}
      />
    </div>
  );
}

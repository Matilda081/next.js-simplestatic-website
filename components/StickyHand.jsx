import { PiHandPalmThin } from "react-icons/pi";

export default function StickyHand(){
  return (
    <div className="fixed bottom-5 right-5 z-50">
      <button className="w-14 h-14 flex items-center justify-center rounded-full bg-purple-700 hover:bg-purple-600 shadow-lg transition duration-300">
        <PiHandPalmThin className="text-" size={30} strokeWidth={3}/>
      </button>
    </div>
  );
}
import type { Cardmodalprops } from "../types";

export default function Cardmodal ({card, onClose} : Cardmodalprops){
    return(
        <div className="fixed inset-0 bg-gray-400 flex justify-center items-center">
            <div className="bg-white rounded-xl w-96 z-10">

                <h2 className="text-lg font-medium mb-4">{card.cardtitle}</h2>
        <p className="text-sm text-gray-500 mb-2">Assignee: {card.name}</p>
        <p className="text-sm text-gray-500 mb-4">Priority: {card.priority}</p>

  <button className="text-sm border border-gray-300 rounded-lg px-4 py-2" onClick={onClose}>
    close
  </button>
            </div>

        </div>
    )
}
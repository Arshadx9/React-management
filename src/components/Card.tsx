import type { Cardprops } from "../types"

export function Card({cardtitle , name , priority , onCardClick } : Cardprops){
    return(
        <div className="flex justify-center p-3" onClick={() => onCardClick?.({ cardtitle, name, priority })} >

            <div className="w-48 h-40 rounded-xl bg-gray-300 flex flex-col justify-between p-3 "  >

    <div className="text-sm font-mono">
{cardtitle}
    </div>

            <div className="flex justify-between">
                <div>{name}</div>
                <div>{priority}</div>
            </div>


        </div>

        </div>
        
    )
}
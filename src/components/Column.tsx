import type { Columnprops } from "../types"
import { Card } from "./Card"


export default function Column({title , card ,  onCardClick} : Columnprops){
    return(
        <div className="bg-gray-100 w-56 p-3 rounded-xl h-96">
            <div className="flex justify-center ">
      <h3 className="text-gray-700 font-mono text-sm">{title}</h3>
            </div>

      {card.map((item)=>(
        <Card key={item.cardtitle} cardtitle={item.cardtitle} name={item.name} priority={item.priority} onCardClick={onCardClick} />
      ))}



        </div>
    )
}
import { useState } from "react"
import Column from "./components/Column"
import { donecard, inprogresscard, todocard } from "./data/dummydata"
import type { Cardprops } from "./types"
import Cardmodal from "./components/Cardmodal"

function App () {

const [selectedcard, setselectedcard ] = useState<Cardprops | null>(null)

function handleclick(card : Cardprops){
  setselectedcard(card)

}


  return(
    <div>
<div className="flex gap-4 p-6">
<Column title="To Do" id="1" card={todocard} onCardClick={handleclick} />
<Column title="In progress" id="2" card={inprogresscard} onCardClick={handleclick} />
<Column title="Done" id="3" card={donecard} onCardClick={handleclick} />
</div>
{selectedcard && <Cardmodal card={selectedcard} onClose={() => setselectedcard(null)} />}

    </div>
  )
}

export default App 
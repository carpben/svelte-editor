import { TEXT_WIDGET } from "../widgets/text/TEXT_WIDGET";
import { Action, ACTION_TYPE } from "./Actions";
import { elements, MODE, mode, selectedId } from "./store";

export const stateManager = (action: Action) => {
    switch(action.type){
        case ACTION_TYPE.ADD_ELEMENT: {
            elements.update(elements=>[...elements, {...TEXT_WIDGET.initial, id: Date.now()}])
            break  
        }
        case ACTION_TYPE.EDIT_ELEMENT: {
            elements.update(elements=> elements.map((el, i)=> i!=elements.length-1? el : {...el, [action.field]:action.newVal}))
            break 
        }
        case ACTION_TYPE.EDITOR_MODE_TOGGLE: {
            mode.update(currentMode => currentMode===MODE.EDIT? MODE.PREVIEW : MODE.EDIT)
            break 
        }
        case ACTION_TYPE.SELECT_ELEMENT: {
            selectedId.set(action.id)
            break 
        }
        
    }
}

setInterval(()=>{

}, 60000)
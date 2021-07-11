import { derived, get, writable } from 'svelte/store';
import { getPreviouslyStoredElements, persistElements } from '../elementsPersistency/persistency';
import { TEXT_WIDGET } from '../widgets/text/TEXT_WIDGET';



const initial = getPreviouslyStoredElements() || [TEXT_WIDGET.initial]

// enum MODE {
//     EDIT
// }

export const MODE = {
    EDIT: "EDIT", 
    PREVIEW: "PREVIEW"
}

export const elements = writable(initial)

export const mode = writable(MODE.EDIT)

export const selectedId = writable("")

export const selectedElement = derived(selectedId, ($selectedId)=>{
    console.log($selectedId)
    if (!$selectedId){
        return {}
    }
    const element = get(elements).filter(el=>el.id===$selectedId)?.[0]
    return element
})

selectedElement.subscribe(el=>console.log(el))

persistElements()
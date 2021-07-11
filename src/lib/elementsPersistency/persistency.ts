import { elements } from "../management/store";

const SVELTE_EDITOR_LOCAL_STORAGE_KEY = "SVELTE_EDITOR";
export const ELEMENTS_KEY = SVELTE_EDITOR_LOCAL_STORAGE_KEY + "-ELEMENTS"


export const getPreviouslyStoredElements = () => {
    return JSON.parse(
        window.localStorage.getItem(ELEMENTS_KEY)
    );
};

export const persistElements = ()=>{
    elements.subscribe(els=>{
        window.localStorage.setItem(ELEMENTS_KEY, JSON.stringify(els))
    })
}
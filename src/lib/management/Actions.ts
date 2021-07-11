export enum ACTION_TYPE {
    ADD_ELEMENT = "ADD_ELEMENT",
    EDIT_ELEMENT = "EDIT_ELEMENT",
    EDITOR_MODE_TOGGLE= "EDITOR_MODE_TOGGLE", 
    SELECT_ELEMENT = "SELECT_ELEMENT"
}


export type Action = {
    type: ACTION_TYPE.ADD_ELEMENT |ACTION_TYPE.EDITOR_MODE_TOGGLE
} | {
    type: ACTION_TYPE.EDIT_ELEMENT, 
    field: string 
    newVal: any  
} | {
    type: ACTION_TYPE.SELECT_ELEMENT
    id: string 
}
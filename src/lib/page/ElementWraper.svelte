<script>
import { ACTION_TYPE } from "../management/Actions";

import { dispatch } from "../management/dispatch";

import { selectedElement, selectedId } from "../management/store";

    export let id; 

    let isSelected; 
    selectedId.subscribe(selected=>{
        console.log(selected)
        isSelected = selected===id
    })
</script>

<div class={isSelected? "selected": ""} on:click={
    ()=>dispatch({
        type: ACTION_TYPE.SELECT_ELEMENT, 
        id
    })
} >
    <slot></slot>
</div>

<style>
    div {
        border: 1px solid transparent;
    }
    div:hover {
        border: 1px dashed #aaf;
         cursor: pointer;
    }

    .selected, .selected:hover {
        border: 1px solid blue; 
    }
    
    
</style>
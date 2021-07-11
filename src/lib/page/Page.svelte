<script>
import { ACTION_TYPE } from "../management/Actions";

import { dispatch } from "../management/dispatch";

import { elements } from "../management/store";
import TextWidget from "../widgets/text/TextWidget.svelte";
import ElementWraper from "./ElementWraper.svelte";

let elementsArr;

elements.subscribe(elements => {
    elementsArr = elements
})

const add = ()=>{
    dispatch({
        type: ACTION_TYPE.ADD_ELEMENT
    })
}


</script>

<div class="page">
    {#each elementsArr as element}
        <ElementWraper id={element.id}>
            <TextWidget widgetData={element}  />
        </ElementWraper>
    {/each}

    <div class="add">
        <button on:click={add}>Add</button>
    </div>
</div>

<style>
    .page{
        width: 1200px; 
        border: 1px solid blue; 
    }
    .add {
        display: flex;
        justify-content: center;
    }
</style>
<script>
    import { ACTION_TYPE } from "../management/Actions";

    import { dispatch } from "../management/dispatch";

    import { elements, selectedElement } from "../management/store";
    import Field from "./Field.svelte"



    let selectedEl; 

    selectedElement.subscribe(el=> {
        console.log(el)
        selectedEl = el
    })

    $:     fields = Object.entries(selectedEl).filter(([k,v])=>k!="id")

</script>

<div>
    {#each fields as field}
            <Field name={field[0]} value={field[1]} 
                onChange={(newVal)=>dispatch({
                    type: ACTION_TYPE.EDIT_ELEMENT, 
                    field:field[0], 
                    newVal, 

                })}
            
            />
    {/each}
</div>

<style>
    div{
        width: 300px;
        border: 1px solid blue;
    }    
</style>
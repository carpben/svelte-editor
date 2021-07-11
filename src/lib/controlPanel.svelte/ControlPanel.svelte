<script>
import { ACTION_TYPE } from "../management/Actions";

import { dispatch } from "../management/dispatch";

import { MODE, mode } from "../management/store";


    let editorMode; 

    mode.subscribe(mode=>{
        editorMode=mode
    })
</script>

<div>
    <button on:click={()=>{
        dispatch({type:ACTION_TYPE.EDITOR_MODE_TOGGLE})
    }}>
        {editorMode===MODE.EDIT? "Preview" : "Edit"}
    </button>

</div>

<style>
    div {
        display: flex;
        background-color: #444;
        height: 50px;
    }
    button {
        background-color: #444;
        border-left-width: 1px;
        border-right-width: 1px;
        border-color: black;
        color: white;
        padding: 16px;
        margin-left: auto;
    }
</style>
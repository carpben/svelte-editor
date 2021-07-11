<script lang="ts">
    import { text } from "svelte/internal";
    import { TEXT_WIDGET } from "./TEXT_WIDGET";
    export let widgetData: typeof TEXT_WIDGET.initial ;

    function toCSS (obj){
        return         Object.entries(obj)
		.map(([key, value]) => `${key}:${value}${typeof(value)==="number"? "px": ""}`)
		.join(';');
    }

    $:     style = {
        ["font-size"]: widgetData.fontSize, 
        ["text-align"]: widgetData.textAlign
    }
    
</script>

<div style="{toCSS(style)}">
    {widgetData.text}
</div>

<style>
    div {
        margin: 15px 0; 
    }
</style>

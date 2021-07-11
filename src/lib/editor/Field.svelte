<script>
    export let name; 
    export let value; 
    export let onChange;

    const type = typeof(value)==="number"? "number" : "text";
</script>

<div class="outer">
    {name}
    <div>
        <input        {type} value={value} on:input={(e)=>{
    
        // @ts-ignore
        onChange(e.target[typeof(value)==="number"? "valueAsNumber": "value"])
    }} /> 
</div>
</div>
<style>
    .outer{
        margin: 20px 0; 
    }
</style>
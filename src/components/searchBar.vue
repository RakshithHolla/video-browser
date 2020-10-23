<template>
   <div>
       <input @input="onInput" /> <!--can use v-on:input or @input-->
   </div> 
</template>

<script>
export default {
    name: 'searchBar',
    methods: {
        onInput: function(event){
            this.$emit('termChange', event.target.value);
        }
    }
}
</script>

<style scoped>
    input{
        width: 75%;
    }

    div{
        text-align: center;
        margin: 20px;
    }
</style>
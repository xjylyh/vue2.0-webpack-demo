<template>
    <div class="fthe">
        <div class="childe" v-for="n in 5">{{n}}</div>
    </div>
</template>

<style>
    .fthe{
        background-color:#00bbff;
        overflow: hidden;
    }
    .childe{
        float:left;
        width:50px;
        height:50px;
        text-align: center;
        line-height: 50px;
        font-size:20px;
        font-weight: bold;
        margin:0 20px;
        border: 1px solid #a00;
    }
</style>
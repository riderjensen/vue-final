<template>
  <div :style="{backgroundColor: smallColor}" v-on:click="$emit('sendsmallcolor', smallColor)">
  </div>
</template>

<script>
export default {
	props: ['smallColor']
}
</script>


<style scoped>
div{
	height: 20px;
	width: 20px;
	background-color: #fff;
	
}
div:hover{
	box-shadow: 1px 1px 3px;
	transform: translateY(-1px);
	transform: translateX(1px);
}
</style>

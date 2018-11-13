<template>
  <div @click="addColor" :style="{backgroundColor: currentColor}">
  </div>
</template>

<script>
export default {
	name: 'PixelBlock',
	props: ['color'],
	data: () => {
    return {
		currentColor: ''
    };
  },
	methods: {
		addColor() {
			this.currentColor = this.color;
		}
	}
}
</script>


<style scoped>
div{
	border-style: solid;
    border-width: 1px;
	border-color: #eee;
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

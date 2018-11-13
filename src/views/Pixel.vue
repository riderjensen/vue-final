<template>
  <div id="app">
	<link rel="stylesheet" href="../bootstrap.css">
	<div class="container-fluid">
	<div class="row">
		<div class="col-sm-9">

					<div id="myTestHere" :style="{width: getwidth()}">
					<div v-for="index in squareGrid" :key="index">
							<div v-for="index in squareGrid" :key="index">
								<PixelBlock v-bind:color="currentColor" class="block"></PixelBlock>

						</div>	
						<br />
					</div>
					</div>
				</div>

		<div class="col-sm-3">
			<div class="row">
				<div class="col-sm-12">
					<Sidebar v-on:color="addColor" v-on:pixelNum="changePixel" :squareGrid="squareGrid*20+'px'" />
				</div>
			</div>
		</div>
	</div>
	</div>
  </div>
</template>

<script>
import PixelBlock from '../components/PixelBlock.vue'
import Sidebar from '../components/Sidebar.vue'

export default {
  name: 'app',
  components: {
	PixelBlock,
	Sidebar
  },
    data: () => {
    return {
		squareGrid: 25,
		currentColor: ''
    };
  },
  methods: {
		addColor: function(color) {
			this.currentColor = color;
		},
		changePixel: function(num) {
			this.squareGrid = parseInt(num);
		},
		getwidth: function(){
			return this.squareGrid*20 + 'px'
		}
	}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow:hidden;
}
.block{
	float: left;
	display: block;
}
</style>

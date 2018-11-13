<template>
  <div class="side">
	  <div class="input-group ">
		  <p class="text-center">Click a button or enter a number</p>
		<p class="text-center">
		<button class="btn btn-primary" @click="$emit('pixelNum', 10)">10</button>
		<button class="btn btn-primary" @click="$emit('pixelNum', 20)">20</button>
		<button class="btn btn-primary" @click="$emit('pixelNum', 25)">25</button>
		<button class="btn btn-primary" @click="$emit('pixelNum', 30)">30</button>
		</p>
		<br />
		<p>
		<input type="num" class="form-control" placeholder="Number" v-model="ourPixelNumbers" v-on:keyup="$emit('pixelNum', ourPixelNumbers)" /></p>
		<br />
	</div>
		<br />
		<br />
	<div class="input-group mb-3">
		<input type="text" class="form-control" placeholder="CSS Color, Hex, or RGB" v-model="ourColor" v-on:keyup="$emit('color', ourColor)" />
		<br />
	</div>
	<button class="btn btn-primary" @click="pushColor(ourColor)">Add Color</button>
	<button class="btn btn-danger" @click="deleteColor(ourColor)">Delete Color</button>
	<br /><br />
	<p>Our Color: <span class="colorShow" :style="{backgroundColor: ourColor}"></span></p>
	<p>Common colors used</p>
	<div class="flexRow">
		<div v-for="index in commonColorsArray" :key="index">
			<CommonColor :smallColor="index" v-on:sendsmallcolor="setColor" />
		</div>
	</div>
	<v-dialog
      v-model="dialog"
      width="500"
    >
      <v-btn
        slot="activator"
        color="red lighten-2"
        dark 
		@click="exportImg"
      >
        Export Picture
      </v-btn>

      <v-card>

        <v-card-text id="ourPicHere">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            flat
            @click="dialog = false"
          >
            I accept
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>



<script>
import CommonColor from './CommonColor.vue';
import html2canvas from 'html2canvas';

export default {
	name: 'Sidebar',
	components: {
		CommonColor
	},
	data: () => {
		return {
			ourColor: '',
			commonColorsArray: ['black','white','gray','red', 'green', 'blue', 'yellow', 'tan', 'rebeccapurple'],
			ourPixelNumbers: 10,
			dialog: false
		}
	},
	watch: {
		ourColor: function () {
			this.$emit('color', this.ourColor);
		}
	},
	methods: {
		pushColor(color) {
			if(!this.commonColorsArray.includes(color)){
				this.commonColorsArray.push(color);
			}
		},
		deleteColor(color) {
			if(this.commonColorsArray.includes(color)){
				let index = this.commonColorsArray.indexOf(color);
				this.commonColorsArray.splice(index, 1);
			}
		},
		setColor(incColor) {
			this.ourColor = incColor;
		},
		exportImg() {
			// remove styling on each pixel block and 
			html2canvas(document.querySelector("#myTestHere"), {
				canvas: null
			}).then(function(canvas) {
    			document.querySelector('#ourPicHere').appendChild(canvas);
			})
			
			}
		}
	}
</script>

<style scoped>
div.side{
	padding: 10px;
	height: 100%;
	background-color: #eee;
}
span.colorShow{
	display: inline-block;
	height: 15px;
	width: 15px;
}
.flexRow{
	display: flex;
	flex-wrap: wrap;
}
button{
	margin-left: 10px;
}
.text-center{
	text-align: center;
}
</style>

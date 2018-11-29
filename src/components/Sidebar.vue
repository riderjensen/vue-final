<template>
  <div class="side">
	  <div class="input-group ">
		  <p class="text-center">Click to pick a canvas size</p>
		<p class="text-center">
		<button class="btn btn-primary" @click="$emit('pixelNum', 10)">10</button>
		<button class="btn btn-primary" @click="$emit('pixelNum', 15)">15</button>
		<button class="btn btn-primary" @click="$emit('pixelNum', 20)">20</button>
		<button class="btn btn-primary" @click="$emit('pixelNum', 25)">25</button>
		</p>
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
      width="550"
    >
      <v-btn
        slot="activator"
        color="red lighten-2"
        dark
		@click="exportImg()"
      >
        Export Image
      </v-btn>

      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Export Image
        </v-card-title>

        <v-card-text id="ourPicHere">
               </v-card-text>

        <v-divider></v-divider>
		<p>Right click on the picture to save it</p>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            flat
            @click="dialog = false;"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </div>
</template>



<script>
import CommonColor from "./CommonColor.vue";
import html2canvas from "html2canvas";

export default {
  name: "Sidebar",
  props: ["squareGrid"],
  components: {
    CommonColor
  },
  data: () => {
    return {
      ourColor: "",
      commonColorsArray: [
        "black",
        "white",
        "gray",
        "red",
        "green",
        "blue",
        "yellow",
        "tan",
        "rebeccapurple"
      ],
      ourPixelNumbers: 10,
      dialog: false
    };
  },
  watch: {
    ourColor: function() {
      this.$emit("color", this.ourColor);
    }
  },
  methods: {
    pushColor(color) {
      if (!this.commonColorsArray.includes(color)) {
        this.commonColorsArray.push(color);
      }
    },
    deleteColor(color) {
      if (this.commonColorsArray.includes(color)) {
        let index = this.commonColorsArray.indexOf(color);
        this.commonColorsArray.splice(index, 1);
      }
    },
    setColor(incColor) {
      this.ourColor = incColor;
    },
    exportImg() {
      let element = document.querySelector("#ourPicHere");
      while (element.firstChild) {
        element.removeChild(element.firstChild);
      }

      html2canvas(document.querySelector("#myTestHere"), {
        canvas: null
      }).then(function(canvas) {
        document.querySelector("#ourPicHere").appendChild(canvas);
      });
    }
  }
};
</script>

<style scoped>
div.side {
  padding: 10px;
  height: 100%;
  background-color: #eee;
}
span.colorShow {
  display: inline-block;
  height: 15px;
  width: 15px;
}
.flexRow {
  display: flex;
  flex-wrap: wrap;
}
button {
  margin-left: 10px;
}
.text-center {
  text-align: center;
}
.hidden {
  display: none;
}
</style>

<template>
  <div class="about">
    <h1>This is a layout page</h1>
  </div>
</template>

<script>
import { films } from "../assets/films";
export default {
	data: () => {
		return{
			allFilms: films
		}
	}
}
</script>

<style scoped>
ul{
	list-style-type: none;
}

</style>

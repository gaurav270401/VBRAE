<script setup>

</script>

<template>
	<router-view name="navbar" />
	<router-view />
	<router-view name="footer" />
</template>

<style>
#app,
body,
html {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	width: auto;
	background-color: #0D1021;
	color: white;
}
</style>

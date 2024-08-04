<template>
	<ul class="list-unstyled mx-5 dropdown-menu">
		<li class="py-4">
			<a class="dropdown-item h5 text-decoration-none" v-for="(language, index) in languages" :key="index">{{
				language }}</a>
		</li>
	</ul>
</template>
<script>
export default {
	name: 'DropDown',
	props: {
		languages: {
			type: Array,
			required: true
		}
	}
}
</script>
<style></style>
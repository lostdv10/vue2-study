<template>
	<div class="app">
		<School/>
		<Student/>
	</div>
</template>

<script>
	import Student from './components/Student'
	import School from './components/School'

	export default {
		name:'App',
		components:{ School, Student }
	}
</script>

<style scoped>.app{background-color: gray;padding: 5px;}</style>
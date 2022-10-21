<template>
	<div>
		<img src="./assets/logo.png" alt="">
        <h1>你好</h1>
		<School></School>
		<Student></Student>
        <HelloWorld/>
	</div>
</template>

<script>
	// 引入组件
	import School from './components/School.vue'
	import Student from './components/Student.vue'
    import HelloWorld from './components/HelloWorld.vue'

	export default {
		name:'App',
		components:{ School, Student,HelloWorld }
	}
</script>
<template>
	<div class="school">
		<h2>学校名称：{{name}}</h2>
		<h2>学校地址：{{address}}</h2>
	</div>
</template>

<script>
	import pubsub from 'pubsub-js'

	export default {
		name: 'School',
		data() {
			return {
				name:'尚硅谷',
				address:'北京',
			}
		},
		methods: {
			demo(msgName, data) {
				console.log('我是School组件，收到了数据：',msgName, data)
			}
		},
		mounted() {
			this.pubId = pubsub.subscribe('demo', this.demo) // 订阅消息
		},
		beforeDestroy() {
			pubsub.unsubscribe(this.pubId) // 取消订阅
		}
	}
</script>

<style scoped>
	.school{
		background-color: skyblue;
		padding: 5px;
	}
</style>
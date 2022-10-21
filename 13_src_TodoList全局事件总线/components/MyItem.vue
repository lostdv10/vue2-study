<template>
<li>
  <label>
    <input type="checkbox" :checked="todoObj.done" @change="handleCheck(todoObj.id)"/>
    <span>{{ todoObj.title }}</span>
  </label>
  <button class="btn btn-danger" @click="handleDelete(todoObj.id)">删除</button>
  </li>
</template>

<script>
  export default {
    name: "MyItem",
    data() {
      return {};
    },
    props: ["todoObj"], // 声明接受todoObj对象
    methods: {
      handleCheck(id) {
        this.$bus.$emit('checkTodo', id)
      },
      handleDelete(id) {
        if (confirm('确定删除吗？')) {
          this.$bus.$emit('deleteTodo', id)
        }
      }
    },
  };
</script>
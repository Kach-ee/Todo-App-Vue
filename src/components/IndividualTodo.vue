<template>
  <div class="individual-todo" v-if="todo">
    <div class="individual-todo-top">
      <router-link to="/">
        <i class="lucide-chevron-left"></i>
      </router-link>
      <h1>{{ todo.title }}</h1>
    </div>
    <p class="individual-todo-other">
      <span>
        <i class="lucide-circle individual-todo-icon"></i>
      </span>
      {{ todo.id }}
    </p>
    <p class="individual-todo-other">
      <span>
        <i class="lucide-help-circle individual-todo-icon"></i>
      </span>
      {{ todo.completed ? "Completed" : "Pending" }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'IndividualTodo',
  data() {
    return {
      todo: null
    }
  },
  mounted() {
    this.fetchTodo()
  },
  methods: {
    async fetchTodo() {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/todos/${this.$route.params.id}`
        )
        this.todo = await response.json()
      } catch (error) {
        console.error("Error fetching todo:", error)
      }
    }
  }
}
</script>

<style scoped>
.individual-todo {
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-content: center;
  margin: 0;
}

.individual-todo a {
  background-color: transparent;
  color: cadetblue;
  font-size: 1.5rem;
  border-radius: 3px;
  cursor: pointer;
  font-weight: 600;
  border: none;
  font-family: "Cabin", sans-serif;
  max-width: 150px;
  text-decoration: none;
  transition: 350ms;
}

.individual-todo-top {
  background-color: #272323;
  padding: 15px;
  border-radius: 25px;
  margin-bottom: 16px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.individual-todo-other {
  background-color: #272323;
  padding: 15px;
  border-radius: 25px;
}

.individual-todo-icon {
  color: #868686;
  margin-right: 0.7rem;
  font-size: 1.2rem;
}
</style>

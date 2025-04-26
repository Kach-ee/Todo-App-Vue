<template>
  <div>
    <div v-if="hasError" class="error-boundary">
      <h3>Chai! E be like something spoil somewhere</h3>
      <p>Try retracing your steps or go</p>
      <router-link to="/">Back to Todos</router-link>
      <button type="button" @click="doTheRefresh">Refresh</button>
    </div>
    <slot v-else></slot>
  </div>
</template>

<script>
export default {
  name: 'ErrorBoundary',
  data() {
    return {
      hasError: false,
      error: null
    }
  },
  errorCaptured(err, vm, info) {
    this.error = err
    this.hasError = true
    return false // Prevent the error from bubbling further
  },
  methods: {
    doTheRefresh() {
      window.location.href = "/"
    }
  }
}
</script>

<style scoped>
.error-boundary {
  color: #fff;
  text-align: center;
  margin: 250px 0;
  font-size: 1.3rem;
}

.error-boundary a {
  text-decoration: underline;
  color: #272323;
}

.error-boundary button {
  background-color: #272323;
  color: cadetblue;
  margin: 0 10px;
  font-size: 18px;
  padding: 10px;
  border-radius: 3px;
  cursor: pointer;
  font-weight: 600;
  border: none;
  font-family: "Cabin", sans-serif;
}

.error-boundary button:hover {
  border: 1px solid #cac8c8;
  font-size: 19px;
}
</style>

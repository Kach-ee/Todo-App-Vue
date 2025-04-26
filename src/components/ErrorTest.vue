<template>
  <div>{{ throwError() }}</div>
</template>

<script>
export default {
  name: 'ErrorTest',
  methods: {
    throwError() {
      throw new Error("This is a test error!")
    }
  }
}
</script>

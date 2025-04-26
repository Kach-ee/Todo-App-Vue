<template>
  <ErrorBoundary>
    <router-view v-slot="{ Component }">
      <Suspense>
        <template #default>
          <component :is="Component" />
        </template>
        <template #fallback>
          <div class="lazy-contents">
            <h3>Loading Contents, please wait</h3>
            <Loader class="loading-icon" />
          </div>
        </template>
      </Suspense>
    </router-view>
  </ErrorBoundary>
</template>



<script>
import ErrorBoundary from './ErrorBoundary.vue'
import { Loader } from 'lucide-vue-next';

export default {
  name: 'App',
  components: {
    ErrorBoundary,
    Loader,
  }
}
</script>
<template>
  <div class="main-todo">
    <div class="todo-nav">
      <router-link class="error-nav" to="/test-error">
        Error Boundary
      </router-link>
      <router-link class="error-nav" to="/non-existent-path">
        Error 404
      </router-link>
    </div>

    <h1>{{ currentFilter }}</h1>

    <div class="main-nav">
      <div class="filter-menu">
        <div class="menu-bars" @click="displaySidebar">
          <Menu />
</div>
      </div>

      <div class="add-new-todo">
        <Plus class="add-new-todo-icon" @click="setIsModalOpen(true)" />
      </div>

      <div class="search">
        <div :class="searchbar ? 'search-field active' : 'search-field'">
          <input
            type="text"
            v-model="searchValue"
            @input="handleChange"
            placeholder="Search here..."
          />
          <X class="cancel-search" @click="displaySearchbar" />
        </div>

        <div class="search-icon" @click="displaySearchbar">
          <Search />
        </div>
      </div>
    </div>

    <nav :class="sidebar ? 'filter-nav-menu active' : 'filter-nav-menu'">
      <ul class="filter-nav-menu-items" @click="displaySidebar">
        <li class="filter-navbar-toggle">
          <div @click="displaySidebar">
            <X @click="displaySidebar" class="cursor-p"/>
</div>
        </li>
        <li class="filter-ctrl" @click="filterDifference('All')">
          <Layers />
          <span>All</span>
        </li>
        <li class="filter-ctrl" @click="filterDifference('Completed')">
          <Check />
          <span>Completed</span>
        </li>
        <li class="filter-ctrl" @click="filterDifference('Pending')">
          <Clock />
          <span>Pending</span>
        </li>
      </ul>
    </nav>

    <!-- Modal for Adding New Todo -->
    <div v-if="isModalOpen" class="modal">
      <input
        type="text"
        placeholder=" To-do..."
        v-model="newTodo"
        class="add-new-input"
        ref="todoInput"
      />
      <button @click="handleAddTodo" class="add-new-btn">Add</button>
      <button @click="setIsModalOpen(false)" class="cancel-new-btn">
        Cancel
      </button>
    </div>

    <ul class="your-todos">
      <li
        v-for="item in currentItems"
        :key="item.id"
        :class="item.completed ? 'checked-todo' : 'unchecked-todo'"
      >
        <div class="checkbox-container">
          <input
            type="checkbox"
            class="checkbox"
            :checked="item.completed"
            @change="checkedOrNot(item.id)"
          />
          <span class="checkmark" @click="checkedOrNot(item.id)"></span>
        </div>
        <router-link
          :to="`/todo/${item.id}`"
          :class="item.completed ? 'todo-text checked' : 'todo-text'"
        >
          {{ item.title }}
        </router-link>
      </li>
    </ul>
    
    <div class="pagination">
      <button @click="handlePrev" :disabled="currentPage === 0">Prev</button>
      <div class="pagination-numbers">
        <p>
          Page <span class="pagiNumbers">{{ currentPage + 1 }}</span> of
          <span class="pagiNumbers">{{ totalPages }}</span>
        </p>
      </div>
      <button @click="handleNext" :disabled="currentPage === totalPages - 1">
        Next
      </button>
    </div>
  </div>
</template>

<script>
import { Menu,Plus,X,Search,Layers,Check,Clock } from 'lucide-vue-next'

export default {
  name: 'Todos',
  components: {
    Menu,
    Plus,
    X,
    Search,
    Layers,
    Check,
    Clock
  },
  data() {
    return {
      todos: [],
      searchValue: '',
      currentPage: 0,
      currentFilter: 'All',
      sidebar: false,
      searchbar: false,
      T_Per_page: 10,
      newTodo: '',
      isModalOpen: false
    }
  },
  created() {
    this.fetchData()
  },
  computed: {
    filteredTodos() {
      return this.todos.filter(todo => {
        const similar2Search = todo.title
          .toLowerCase()
          .includes(this.searchValue.toLowerCase())

        switch (this.currentFilter.toLowerCase()) {
          case 'all':
            return similar2Search
          case 'completed':
            return similar2Search && todo.completed
          case 'pending':
            return similar2Search && !todo.completed
          default:
            return similar2Search
        }
      })
    },
    totalPages() {
      return Math.ceil(this.filteredTodos.length / this.T_Per_page)
    },
    currentItems() {
      return this.filteredTodos.slice(
        this.currentPage * this.T_Per_page,
        (this.currentPage + 1) * this.T_Per_page
      )
    }
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        )
        this.todos = await response.json()
      } catch (error) {
        console.error("Error fetching todos:", error)
      }
    },
    handleAddTodo() {
      if (this.newTodo.trim()) {
        const newItem = {
          userId: 1,
          id: this.todos.length + 1,
          title: this.newTodo,
          completed: false
        }
        this.todos = [newItem, ...this.todos]
        this.newTodo = ''
        this.isModalOpen = false
      }
    },
    handleNext() {
      if (this.currentPage < this.totalPages - 1) {
        this.currentPage++
      }
      this.isModalOpen = false
    },
    handlePrev() {
      if (this.currentPage > 0) {
        this.currentPage--
      }
      this.isModalOpen = false
    },
    handleChange(e) {
      this.searchValue = e.target.value
      this.currentPage = 0
    },
    filterDifference(filter) {
      this.currentFilter = filter
      this.currentPage = 0
    },
    checkedOrNot(id) {
      this.todos = this.todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed }
        }
        return todo
      })
    },
    displaySidebar() {
      this.sidebar = !this.sidebar
      this.isModalOpen = false
    },
    displaySearchbar() {
      this.searchbar = !this.searchbar
      this.isModalOpen = false
    },
    setIsModalOpen(value) {
      this.isModalOpen = value
      if (value) {
        this.$nextTick(() => {
          if (this.$refs.todoInput) {
            this.$refs.todoInput.focus()
          }
        })
      }
    }
  }
}
</script>

<style>
/* The styles will be imported from the main CSS file */
</style>
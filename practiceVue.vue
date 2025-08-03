<template>
  <div>
    <input v-model="username" @input="saveUsername" />
    <p>Stored: {{ storedUsername }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      storedUsername: ''
    };
  },
  mounted() {
    this.storedUsername = localStorage.getItem('username') || '';
  },
  methods: {
    saveUsername() {
      localStorage.setItem('username', this.username);
      this.storedUsername = this.username;
    }
  }
}
</script>

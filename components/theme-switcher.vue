<template lang="html">
  <div class="switcher">
    <input class="visually-hidden" type="checkbox" id="theme" @input="toggleTheme" name="theme" v-model="darkTheme" :checked="darkTheme">
    <label for="theme">Apply {{ darkTheme ? 'light' : 'dark' }} theme</label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      darkTheme: process.browser ? localStorage.getItem('dark-theme') : false
    }
  },

  mounted() {
    if (process.browser) {
      this.darkTheme = localStorage.getItem('dark-theme') ? 'dark' : 'light'
    }
    const site = document.querySelector('#site')
    site.setAttribute('data-theme', this.darkTheme ? 'dark' : 'light')
  },

  methods: {
    toggleTheme() {
      this.darkTheme = !this.darkTheme
      const site = document.querySelector('#site')
      site.setAttribute('data-theme', this.darkTheme ? 'dark' : 'light')
      localStorage.setItem('dark-theme', this.darkTheme)
      console.log(process.browser ? localStorage.getItem('dark-theme') : 'localStorage doesnt exist')
    }
  }
}
</script>

<style lang="scss" scoped>
.switcher {
  input:focus + label {
    outline: 0.25rem solid var(--color-main-base);
  }

  label {
    background: inherit;
    border: 0.25rem solid var(--color-black);
    border-radius: 0.25rem;
    padding: 0.25rem;

    &:hover {
      cursor: pointer;
    }
  }
}

[data-theme="dark"] .switcher label {
  border-color: var(--color-white);
}
</style>

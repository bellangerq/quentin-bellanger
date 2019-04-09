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
      darkTheme: false
    }
  },

  methods: {
    toggleTheme() {
      const body = document.querySelector('body')
      const theme = body.getAttribute('data-theme')
      theme === 'light'
        ? body.setAttribute('data-theme', 'dark')
        : body.setAttribute('data-theme', 'light')
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
  }
}

[data-theme="dark"] .switcher label {
  border-color: var(--color-white);
}
</style>

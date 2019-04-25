<template lang="html">
  <div class="switcher">
    <input class="visually-hidden" type="checkbox" id="theme" @input="toggleTheme" name="theme" v-model="darkTheme" :checked="darkTheme">
    <label for="theme" :aria-label="`Apply ${darkTheme ? 'light' : 'dark' } theme`"></label>
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

  input:checked + label {
    transform: rotate(180deg);
  }

  label {
    --size: 1.5rem;
    background: var(--color-black);
    border: 4px solid var(--color-black);
    border-radius: 50%;
    display: block;
    height: var(--size);
    position: relative;
    transition: transform 0.5s ease-out;
    width: var(--size);

    &:hover {
      cursor: pointer;
    }

    &::before {
      background: var(--color-white);
      border-radius: 50%;
      content: '';
      display: block;
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
    }

    &::after {
      background: var(--color-black);
      border-radius: 0 var(--size) var(--size) 0;
      content: '';
      display: block;
      height: 100%;
      position: absolute;
      right: 0;
      top: 0;
      transition: transform 0.2s;
      width: calc(var(--size) / 2);
    }
  }
}

[data-theme="dark"] .switcher label {
  background: var(--color-white);
  border-color: var(--color-white);
}
</style>

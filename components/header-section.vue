<template lang="html">
  <header role="banner">
    <nav role="navigation">
      <ul>
        <li><hyper-link href="/">Home</hyper-link></li>
        <!-- <li><hyper-link href="/about">About</hyper-link></li> -->
      </ul>
    </nav>
    <!-- <theme-switcher /> -->
  </header>

</template>

<script>
import themeSwitcher from '@/components/theme-switcher'
export default {
  components: { themeSwitcher }
}
</script>

<style lang="scss" scoped>
header {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 3rem 0;
}

ul {
  display: flex;

  li {
    & + li {
      margin-left: 1rem;
    }

    &::before {
      display: none;
    }
  }
}

a {
  font-weight: var(--weight-black);

  &:hover {
    text-decoration: underline;
  }
}
</style>

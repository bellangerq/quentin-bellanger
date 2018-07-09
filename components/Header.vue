<template lang="html">
  <header>
    <nuxt-link to="/" :title="title">
      <img :src="imgPath('pp.jpeg')" :alt="title" class="avatar">
    </nuxt-link>

    <button type="button" @click="toggleMenu">{{ navigation.title }}</button>

    <nav class="mobile-nav hidden" role="navigation">
      <nuxt-link
        v-for="(link, index) in navigation.items"
        :to="link.slug"
        :title="link.title"
        :key="index"
      >
        {{ link.text }}
      </nuxt-link>

      <a
        href="mailto:hello@quentin-bellanger.com"
        :title="navigation.contact.text"
      >
        {{ navigation.contact.text }}
      </a>

    </nav>

    <nav class="desktop-nav" role="navigation">
      <nuxt-link
        v-for="(link, index) in navigation.items"
        :to="link.slug"
        :title="link.title"
        :key="index"
      >
        {{ link.text }}
      </nuxt-link>

      <a
        href="mailto:hello@quentin-bellanger.com"
        :title="navigation.contact.text"
      >
        {{ navigation.contact.text }}
      </a>
    </nav>
</header>
</template>

<script>
export default {
  data() {
    return {
      title: 'Quentin Bellanger',
      navigation: {
        title: 'Menu',
        items: {
          work: {
            text: 'Work',
            title: 'Discover my recent work',
            slug: 'work'
          },
          services: {
            text: 'Services',
            title: 'See my services',
            slug: 'services'
          },
          blog: {
            text: 'Blog',
            title: 'Read my articles',
            slug: 'blog'
          }
        },
        contact: {
          text: 'Contact',
          title: 'Contact me'
        }
      }
    }
  },
  methods: {
    imgPath (imageName) {
      return require(`~/assets/images/${imageName}`)
    },
    toggleMenu () {
      const mobileNav = document.querySelector('.mobile-nav')
      mobileNav.classList.toggle('hidden')
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  align-items: center;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  position: relative;

  img {
    border-radius: $radius;

    &.avatar {
      height: 30px;
      width: 30px;
    }

    &.flag {
      width: 20px;
    }
  }

  button {
    background: transparent;
    border: none;
    color: lighten($color-black, 60%);
    font-size: 0.90em;
    padding: 0;

    &:hover,
    &:focus {
      color: $color-main;
    }
  }

  nav {
    background: $color-white;
    width: calc(100% - 40px);

    a {
      color: lighten($color-black, 60%);
      display: block;
      font-size: 0.90em;
      padding: 20px 0;
      text-decoration: none;

      &:hover,
      &:focus {
        color: $color-main;
      }
    }

    &.mobile-nav {
      box-shadow: 0 2px 2px 0 rgba($color-black, 0.14);
      left: 0;
      padding: 0 20px;
      position: absolute;
      top: 70px;
    }

    &.desktop-nav {
      display: none;
    }

    &.hidden {
      display: none;
    }
  }
}

@media(min-width: 650px) {
  header {
    padding: 40px 0;

    button {
      display: none;
    }

    nav {

      a {
        display: inline-block;
        margin-left: 20px;
        padding: 0;
      }

      &.mobile-nav {
        display: none;
      }

      &.desktop-nav {
        align-items: center;
        display: flex;
        justify-content: flex-end;
        position: static;
        text-align: right;
      }
    }
  }
}
</style>

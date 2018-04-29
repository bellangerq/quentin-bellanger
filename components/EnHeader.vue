<template lang="html">
  <header>
    <nuxt-link :to="home.href" :title="home.image.title">
      <img :src="imgPath(home.image.src)" :alt="home.image.alt" class="avatar">
    </nuxt-link>

    <button type="button" @click="toggleMenu">{{ button }}</button>

    <nav class="mobile-nav closed">
      <a
        v-for="(link, index) in navigation.links"
        :href="link.href"
        :title="link.title"
        v-html="link.content"
        :target="link.target"
        :key="index"
      >
      </a>
      <nuxt-link :to="locale.fr.href" :title="locale.fr.title">
        <img :src="imgPath(locale.fr.img)" :alt="locale.fr.title" class="flag">
      </nuxt-link>
    </nav>

    <nav class="desktop-nav">
      <a
        v-for="(link, index) in navigation.links"
        :href="link.href"
        :title="link.title"
        v-html="link.content"
        :target="link.target"
        :key="index"
      >
      </a>
      <nuxt-link :to="locale.fr.href" :title="locale.fr.title">
        <img :src="imgPath(locale.fr.img)" :alt="locale.fr.title" class="flag">
      </nuxt-link>
    </nav>
  </header>
</template>

<script type="text/javascript">
export default {
  data() {
    return {
      home: {
        href: "/en",
        image: {
          title: "Quentin Bellanger",
          src: "pp.png",
          alt: "Quentin Bellanger"
        }
      },
      button: "Menu",
      navigation: {
        links: [
          {
            content: "Blog",
            href: "https://blog.quentin-bellanger.com",
            title: "Read my blog posts",
            target: "_blank"
          },
          {
            content: "Contact",
            href: "mailto:hello@quentin-bellanger.com?subject=Hi%20Quentin!",
            title: "Send me an email"
          }
        ]
      },
      locale: {
        fr: {
          img: "fr.png",
          href: "/",
          title: "Site en français"
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
      mobileNav.classList.toggle('closed')
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/stylesheets/vars.scss';

header {
  align-items: center;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  position: relative;

  img {
    border-radius: $radius;
    display: block;

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
    font-size: .90em;
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
      font-size: .90em;
      padding: 20px 0;
      text-decoration: none;

      &:hover,
      &:focus {
        color: $color-main;
      }
    }

    &.mobile-nav {
      box-shadow: 0 2px 2px 0 rgba($color-black, .14);
      left: 0;
      padding: 0 20px;
      position: absolute;
      top: 70px;
    }

    &.desktop-nav {
      display: none;
    }

    &.closed {
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

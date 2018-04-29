<template lang="html">
  <header>
    <nuxt-link :to="home.href" @click.native="hideMenu" :title="home.image.title">
      <img :src="imgPath(home.image.src)" :alt="home.image.alt" class="avatar">
    </nuxt-link>

    <button type="button" @click="toggleMenu">{{ button }}</button>

    <nav class="mobile-nav closed">
      <nuxt-link
        :to="link.href"
        :title="link.title"
        v-for="(link, index) in navigation.links"
        v-if="!link.external"
        :key="index"
        @click.native="hideMenu"
      >
        {{link.content}}
      </nuxt-link>

      <a
        :href="link.href"
        :title="link.title"
        :target="link.target"
        v-for="(link, index) in navigation.links"
        v-if="link.external"
        :key="index"
        @click="hideMenu"
      >
        {{link.content}}
      </a>

      <nuxt-link :to="locale.en.href" @click.native="hideMenu" :title="locale.en.title">
        <img :src="imgPath(locale.en.img)" :alt="locale.en.title" class="flag">
      </nuxt-link>
    </nav>

    <nav class="desktop-nav">
      <nuxt-link
        :to="link.href"
        :title="link.title"
        v-for="(link, index) in navigation.links"
        v-if="!link.external"
        :key="index"
      >
        {{link.content}}
      </nuxt-link>

      <a
        :href="link.href"
        :title="link.title"
        :target="link.target"
        v-for="(link, index) in navigation.links"
        v-if="link.external"
        :key="index"
      >
        {{link.content}}
      </a>

      <nuxt-link :to="locale.en.href" :title="locale.en.title">
        <img :src="imgPath(locale.en.img)" :alt="locale.en.title" class="flag">
      </nuxt-link>
    </nav>
</header>
</template>

<script type="text/javascript">
export default {
  data() {
    return {
      currentPath: this.$nuxt.$route.path,
      home: {
        href: "/",
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
            content: "Services",
            href: "/services",
            title: "Voir mes services",
            external: false
          },
          {
            content: "Références",
            href: "/work",
            title: "Découvrez mon travail",
            external: false
          },
          {
            content: "Blog",
            href: "https://blog.quentin-bellanger.com",
            title: "Lire mes articles de blog",
            target: "_blank",
            external: true
          },
          {
            content: "Contact",
            href: "mailto:hello@quentin-bellanger.com?subject=Bonjour%20Quentin%20!",
            title: "Envoyez moi un email",
            external: true
          }
        ]
      },
      locale: {
        en: {
          img: "en.png",
          href: "/en",
          title: "Website in English"
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
    },
    hideMenu () {
      const mobileNav = document.querySelector('.mobile-nav')
      mobileNav.classList.add('closed')
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

      &.nuxt-link-active {
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

<template lang="html">
  <header>
    <nuxt-link :to="localePath('index')" :title="$t('header.home.title')">
      <img :src="imgPath('pp.png')" :alt="$t('header.home.title')" class="avatar">
    </nuxt-link>

    <button type="button" @click="toggleMenu">{{ $t('header.navigation.title') }}</button>

    <nav class="mobile-nav closed">
      <nuxt-link
        v-for="(link, index) in $t('header.navigation.items')"
        :to="localePath(link.slug)"
        :title="link.title"
        :key="index"
      >
        {{ link.text }}
      </nuxt-link>

      <a
        href="mailto:hello@quentin-bellanger.com"
        :title="$t('header.navigation.contact.text')"
      >
        {{ $t('header.navigation.contact.text') }}
      </a>

      <nuxt-link
        v-for="locale in $i18n.locales"
        v-if="locale.code !== $i18n.locale"
        :key="locale.code"
        :title="locale.name"
        :to="switchLocalePath(locale.code)"
      >
        <img :src="imgPath(locale.flag)" :alt="locale.name" class="flag">
      </nuxt-link>

    </nav>

    <nav class="desktop-nav">
      <nuxt-link
        v-for="(link, index) in $t('header.navigation.items')"
        :to="localePath(link.slug)"
        :title="link.title"
        :key="index"
      >
        {{ link.text }}
      </nuxt-link>

      <a
        href="mailto:hello@quentin-bellanger.com"
        :title="$t('header.navigation.contact.text')"
      >
        {{ $t('header.navigation.contact.text') }}
      </a>

      <nuxt-link
        v-for="locale in $i18n.locales"
        v-if="locale.code !== $i18n.locale"
        :key="locale.code"
        :title="locale.name"
        :to="switchLocalePath(locale.code)"
      >
        <img :src="imgPath(locale.flag)" :alt="locale.name" class="flag">
      </nuxt-link>
    </nav>
</header>
</template>

<script type="text/javascript">
export default {
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

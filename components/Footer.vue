<template lang="html">
  <footer>
    <span>{{ $t('footer.copyright') }}</span>
    <div class="social-links">
      <a
        v-for="(link, index) in $t('footer.socialLinks')"
        v-html="link.icon"
        :href="link.href"
        :title="link.title"
        :key="index"
        target="_blank"
      >
    </a>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import '~/assets/stylesheets/vars.scss';

footer {
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 20px;

  span {
    color: $color-black-light;
    font-size: .90em;
  }

  .social-links {
    color: $color-black-light;

    a {
      color: $color-black-light;
      margin-left: 20px;
      text-decoration: none;

      svg {
        transition: .3s;
      }

      &:hover,
      &:focus {

        svg {
          stroke: $color-main;
        }
      }
    }
  }

  @media(min-width: 650px) {
    padding: 40px 0;
  }
}
</style>

<template lang="html">
  <article>
    <div v-html="post.body" class="body" />
  </article>
</template>

<script>
export default {
  props: ['post'],

  mounted() {
    const titles = this.$el.querySelectorAll('h2, h3')
    this.generateAnchorLinks(titles)
  },

  methods: {
    slugify(str) {
      return str
        .toLowerCase()
        .replace(/\s/g, '-')
        .replace(/[^0-9a-z.-]/g, '')
    },
    generateAnchorLinks(titles) {
      titles.forEach(t => {
        const slug = this.slugify(t.innerText)
        t.insertAdjacentHTML('beforeend', `<a href="#${slug}" class="anchor">#</a>`)
        t.setAttribute('id', slug)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
article {
  border-bottom: 0.25rem solid var(--color-gray-extralight);
  border-top: 0.25rem solid var(--color-gray-extralight);
  margin-top: 3rem;
  padding: 3rem 0;

  /deep/ .body {
    h2 {
      margin: 2rem 0 1rem;
    }

    h3 {
      margin: 1.5rem 0 0.5rem;
    }

    p + p {
      margin-top: 1rem;
    }

    a {
      color: var(--color-main-base);
      transition: color 0.2s ease-in-out;

      &:hover {
        text-decoration: underline;
      }

      &.anchor {
        margin-left: 0.5rem;
      }
    }

    ul, ol {
      margin: 1rem 0 1rem 1rem;

      li + li {
        margin-top: 1rem;
      }
    }

    pre {
      margin: 1.5rem 0;
    }
  }
}
</style>

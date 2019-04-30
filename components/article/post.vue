<template lang="html">
  <article v-html="post.body" />
</template>

<script>
export default {
  props: ['post'],

  mounted() {
    const headings = this.$el.querySelectorAll('h2, h3')
    this.generateAnchorLinks(headings)    
  },

  methods: {
    slugify(str) {
      return str
        .toLowerCase()
        .replace(/\s/g, '-')
        .replace(/[^0-9a-z.-]/g, '')
    },
    generateAnchorLinks(headings) {
      headings.forEach(h => {
        const slug = this.slugify(h.innerText)
        h.insertAdjacentHTML('beforeend', `<a href="#${slug}" class="anchor">#</a>`)
        h.setAttribute('id', slug)
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

  /deep/ {
    h2:hover a,
    h2:focus a,
    h3:hover a,
    h3:focus a {
      opacity: 1;
    }

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
        opacity: 0;
        transition: opacity 0.2s;

        &:focus {
          opacity: 1;
        }
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

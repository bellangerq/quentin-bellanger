const dateHelpers = {
  methods: {
    formatDate (date) {
      const locale = 'en-us'
      return new Date(date).toLocaleString(locale, { month: "long", year: "numeric", day: "2-digit" })
    }
  }
}

export default dateHelpers

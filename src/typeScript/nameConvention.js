export const nameConvention = {
  methods: {
    capitalize: function(str) {
      return str.toUpperCase();
    }
  },

  camelCase: function(str) {
    return str
      .replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
      })
      .replace(/\s+/g, "");
  }
};

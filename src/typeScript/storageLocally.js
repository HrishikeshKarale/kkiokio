export const storageLocally = {
  methods: {
    getLocalStorage: function(name) {
      return localStorage.getItem(name);
    },

    setLocalStorage: function(name, value) {
      localStorage.setItem(name, value);
    },

    removeLocalStorage: function(name) {
      localStorage.removeItem(name);
    },

    checkLocalStorage: function(name) {
      const value = localStorage.getItem(name);
      if (value) {
        return false;
      }
      return true;
    }
  }
};

export const arrayMethods = {
  methods: {
    unique: function(array: any[]): any[] {
      return array.filter((value, index, self) => {
        return self.indexOf(value) === index;
      });
    }
  },
};

<template>
  <div class="arrayCardio">
    <router-link to="/Project">
      <span class="fas fa-angle-double-left fa-2x"> Go Back</span>
    </router-link>
    <div>
      <div class="inventors">
        <label for="">Filter</label>
        {{ inventors | born(1800, 1900) }}
        <br />
        <label for="">Computed (Map)</label>
        {{ firstName }}
        <br />
        <label for="">Computed (sort by birth)</label>
        {{ orderedByBirth }}
        <br />
        <label for="">Computed (reduce)</label>
        {{ yearsLived }}
        <br />
        <label for="">Computed (some inventors are Adult)</label>
        {{ isAdult }}
        <br />
        <label for="">Computed (every inventors is Adult)</label>
        {{ allAdult }}
        <br />
        <label for="">Computed (find inventors first name Albert)</label>
        {{ findAdult("Albert") }}
        <br />
        <label for=""
          >Computed (find inventors index for first name Albert)</label
        >
        {{ findAdultIndex("Albert") }}
        <br />
        <label for="">Computed (remove inventors with first name Albert)</label>
        {{ removeInvestor("Albert") }}
        <br />
        <label for="">Computed (sort by age)</label>
        {{ investorAge }}
        <br />
        <label for="">Computed (reduce car by instances)</label>
        {{ carInstances }}
        <br />
        <label for="">Computed (sort people by firstName)</label>
        {{ orderPeopleByFirst }}
        <br />
        <table>
          <thead>
            <tr>
              <th v-for="key in Object.keys(inventors[0])" :key="key">
                {{ key }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(inv, index) in inventors" :key="index">
              <td v-for="key in Object.keys(inv)" :key="inv + '-' + key">
                {{ inv[key] }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="people">
        <table>
          <tbody>
            <tr v-for="(ppl, index) in people" :key="ppl + ' ' + index">
              <td>
                {{ ppl }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="car">
        <table>
          <tbody>
            <tr v-for="(dta, index) in data" :key="index + '-' + dta">
              <td>
                {{ dta }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "arrayCardio",
  data() {
    const inventors = [
      { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
      { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
      { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
      { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
      { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
      { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
      { first: "Max", last: "Planck", year: 1858, passed: 1947 },
      { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
      { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
      { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
      { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
      { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 }
    ];
    const data = [
      "car",
      "car",
      "truck",
      "truck",
      "bike",
      "walk",
      "car",
      "van",
      "bike",
      "walk",
      "car",
      "van",
      "car",
      "truck"
    ];

    const people = [
      "Beck, Glenn",
      "Becker, Carl",
      "Beckett, Samuel",
      "Beddoes, Mick",
      "Beecher, Henry",
      "Beethoven, Ludwig",
      "Begin, Menachem",
      "Belloc, Hilaire",
      "Bellow, Saul",
      "Benchley, Robert",
      "Benenson, Peter",
      "Ben-Gurion, David",
      "Benjamin, Walter",
      "Benn, Tony",
      "Bennington, Chester",
      "Benson, Leana",
      "Bent, Silas",
      "Bentsen, Lloyd",
      "Berger, Ric",
      "Bergman, Ingmar",
      "Berio, Luciano",
      "Berle, Milton",
      "Berlin, Irving",
      "Berne, Eric",
      "Bernhard, Sandra",
      "Berra, Yogi",
      "Berry, Halle",
      "Berry, Wendell",
      "Bethea, Erin",
      "Bevan, Aneurin",
      "Bevel, Ken",
      "Biden, Joseph",
      "Bierce, Ambrose",
      "Biko, Steve",
      "Billings, Josh",
      "Biondo, Frank",
      "Birrell, Augustine",
      "Black, Elk",
      "Blair, Robert",
      "Blair, Tony",
      "Blake, William"
    ];

    return {
      inventors,
      data,
      people
    };
  },
  computed: {
    isAdult: function() {
      return this.inventors.some(
        inv => new Date().getFullYear() - inv.year > 18
      );
    },
    allAdult: function() {
      return this.inventors.every(
        inv => new Date().getFullYear() - inv.year > 18
      );
    },
    firstName: function() {
      return this.inventors.map(inv => inv.first + " " + inv.last);
    },
    orderedByBirth: function() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      return this.inventors.sort((a, b) => (a.year > b.year ? 1 : -1));
    },
    yearsLived: function() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      return this.inventors.reduce(
        (lifeSpan, inv) => lifeSpan + (inv.passed - inv.year),
        0
      );
    },
    investorAge: function() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      return this.inventors.sort((a, b) =>
        a.passed - a.year > b.passed - b.year ? 1 : -1
      );
    },
    carInstances: function() {
      return this.data.reduce((obj, item) => {
        if (!obj[item]) {
          obj[item] = 0;
        }
        obj[item]++;
        return obj;
      }, {});
    },
    orderPeopleByFirst: function() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      return this.people.sort((person1, person2) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const [last1, first1] = person1.split(", ");
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const [last2, first2] = person2.split(", ");
        return first1 > first2 ? 1 : -1;
      });
    }
  },
  filters: {
    capitalize: function(value) {
      return value.toUpperCase();
    },
    born: function(value, year, passed) {
      // eslint-disable-next-line prefer-const
      let temp = [];
      for (const v in value) {
        if (value[v]["year"] >= year && value[v]["passed"] <= passed) {
          temp.push(value[v]);
        }
      }
      // eslint-disable-next-line no-var
      // var temp = value.forEach(val => {
      //   (val.year >= born && val.passed <= passed )? {return true} : {return false};
      // });
      // console.log(value);
      return temp;
    }
  },
  methods: {
    findAdult: function(name) {
      return this.inventors.find(inv => inv.first === name);
    },
    findAdultIndex: function(name) {
      return this.inventors.findIndex(inv => inv.first === name);
    },
    removeInvestor: function(name) {
      const index = this.findAdultIndex(name);
      const inventors= this.inventors;
      return [...inventors.slice(0, index), ...inventors.slice(index+1,inventors.length)];
    }
  }
};
</script>
<style lang="less" scoped>
@import (reference) "./../../Less/customMixins.less";
@import (reference) "./../../Less/customVariables.less";
@size: 320px;
.arrayCardio {
  display: flex;
  flex-direction: column;
  & > div {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    & > div {
      & > table {
        .boxShadow(@two);
        width: fit-content;
        padding: 8px 16px;
        border-radius: 8px;
        border: 1px solid black;
        background-color: #fafbfc;
        & > tbody,
        & > thead {
          & > tr {
            margin: 4px;
            & > th {
              text-align: left;
            }
            & > td {
              //do something
              padding: 4px 8px;
            }
          }
        }
      }
    }
  }
}
</style>

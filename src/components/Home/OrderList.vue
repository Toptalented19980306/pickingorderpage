<template>
  <md-table v-model="searched" md-sort="name" md-sort-order="asc" md-card md-fixed-header>
    <md-table-empty-state
        md-label="No users found"
        :md-description="`No user found for this '${search}' query. Try a different search term or create a new user.`">
      <md-button class="md-primary md-raised" @click="newUser">Create New User</md-button>
    </md-table-empty-state>
    <md-table-row slot="md-table-row" slot-scope="{ item }" :class="[item.color=='green'?'background-green':item.color=='yellow'? 'background-yellow': 'background-red']">
      <md-table-cell md-label="Wednesday" md-sort-by="wed"><md-checkbox v-model="auckland">{{ item.wed}}<i class="material-icons">lock</i></md-checkbox></md-table-cell>
      <md-table-cell md-label="Thursday" md-sort-by="thur"><md-checkbox v-model="otahuhu">{{ item.thur }}<i class="fas fa-lock"></i></md-checkbox></md-table-cell>
      <md-table-cell md-label="Friday" md-sort-by="fri"><md-checkbox v-model="hamilton">{{ item.fri }}<i class="fas fa-lock"></i></md-checkbox></md-table-cell>
      <md-table-cell md-label="Saturday" md-sort-by="sat"><md-checkbox v-model="christchurch">{{ item.sat }}<i class="fas fa-lock"></i></md-checkbox></md-table-cell>
      <md-table-cell md-label="Sunday" md-sort-by="sun"><md-checkbox v-model="owntruck">{{ item.sun }}<i class="fas fa-lock"></i></md-checkbox></md-table-cell>
      <md-table-cell md-label="Monday" md-sort-by="mon"><md-checkbox v-model="curiour">{{ item.mon }}<i class="fas fa-lock"></i></md-checkbox></md-table-cell>
      <md-table-cell md-label="Tuesday" md-sort-by="tue"><md-checkbox v-model="truck">{{ item.tue }}<i class="fas fa-lock"></i></md-checkbox></md-table-cell>
    </md-table-row>
  </md-table>

</template>

<script>

export default {
  name: 'OrderList',
  props: {
    msg: String
  },
  data: () => ({
    truck: [],
    curiour: [],
    owntruck: [],
    auckland: [],
    otahuhu: [],
    hamilton: [],
    christchurch:[],
    search: [],
    searched: [],
    users: [
      {
        "color": "green",
        "wed":"Order x 11201",
        "thur":"Order x 11201",
        "fri":"Order x 11201",
        "sat":"Order x 11201",
        "sun":"Order x 11201",
        "mon":"Order x 11201",
        "tue":"Order x 11201",

      },
      {
        "color": "green",
        "wed":"Order x 11201",
        "thur":"Order x 11201",
        "fri":"Order x 11201",
        "sat":"Order x 11201",
        "sun":"Order x 11201",
        "mon":"Order x 11201",
        "tue":"Order x 11201",

      },
      {
        "color": "green",
        "wed":"Order x 11201",
        "thur":"Order x 11201",
        "fri":"Order x 11201",
        "sat":"Order x 11201",
        "sun":"Order x 11201",
        "mon":"Order x 11201",
        "tue":"Order x 11201",

      },
      {
        "color": "green",
        "wed":"Order x 11201",
        "thur":"Order x 11201",
        "fri":"Order x 11201",
        "sat":"Order x 11201",
        "sun":"Order x 11201",
        "mon":"Order x 11201",
        "tue":"Order x 11201",

      },
      {
        "color": "green",
        "wed":"Order x 11201",
        "thur":"Order x 11201",
        "fri":"Order x 11201",
        "sat":"Order x 11201",
        "sun":"Order x 11201",
        "mon":"Order x 11201",
        "tue":"Order x 11201",

      },
      {
        "color": "green",
        "wed":"Order x 11201",
        "thur":"Order x 11201",
        "fri":"Order x 11201",
        "sat":"Order x 11201",
        "sun":"Order x 11201",
        "mon":"Order x 11201",
        "tue":"Order x 11201",

      },
      {
        "color": "yellow",
        "wed":"Order x 11201",
        "thur":"Order x 11201",
        "fri":"Order x 11201",
        "sat":"Order x 11201",
        "sun":"Order x 11201",
        "mon":"Order x 11201",
        "tue":"Order x 11201",

      },
      {
        "color": "yellow",
        "wed":"Order x 11201",
        "thur":"Order x 11201",
        "fri":"Order x 11201",
        "sat":"Order x 11201",
        "sun":"Order x 11201",
        "mon":"Order x 11201",
        "tue":"Order x 11201",

      },
      {
        "color": "yellow",
        "wed":"Order x 11201",
        "thur":"Order x 11201",
        "fri":"Order x 11201",
        "sat":"Order x 11201",
        "sun":"Order x 11201",
        "mon":"Order x 11201",
        "tue":"Order x 11201",

      },
      {
        "color": "red",
        "wed":"Order x 11201",
        "thur":"Order x 11201",
        "fri":"Order x 11201",
        "sat":"Order x 11201",
        "sun":"Order x 11201",
        "mon":"Order x 11201",
        "tue":"Order x 11201",

      },
      {
        "color": "red",
        "wed":"Order x 11201",
        "thur":"Order x 11201",
        "fri":"Order x 11201",
        "sat":"Order x 11201",
        "sun":"Order x 11201",
        "mon":"Order x 11201",
        "tue":"Order x 11201",

      },
      {
        "color": "red",
        "wed":"Order x 11201",
        "thur":"Order x 11201",
        "fri":"Order x 11201",
        "sat":"Order x 11201",
        "sun":"Order x 11201",
        "mon":"Order x 11201",
        "tue":"Order x 11201",

      }
    ]
  }),
  methods: {
    newUser () {
      window.alert('Noop')
    }
  },
  created () {
    this.searched = this.users
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.background-green {
  background-color: green;
}
.background-yellow {
  background-color: yellow;
}
.background-red {
  background-color: red;
}
.md-table-cell {
/* //padding: 6px 12px 6px 12px !important; */
}
.md-table-cell .md-table-cell-container {
  padding: 6px 12px 6px 12px !important;
}
</style>
<style>
.md-table-cell .md-table-cell-container {
  padding: 6px 12px 6px 12px !important;
}
</style>

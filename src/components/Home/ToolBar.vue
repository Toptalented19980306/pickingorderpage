<template>
  <div class="page-container md-layout-column">
    <li class="lastLi">
      <md-button class="md-icon-button" @click="showNavigation = true">
        <md-icon>menu</md-icon>
      </md-button>
    </li>
    <md-toolbar class="head-toolbar">

      <div class="check-box-group">
        <md-checkbox v-model="auckland">Auckland</md-checkbox>
        <md-checkbox v-model="otahuhu">Otahuhu</md-checkbox>
        <md-checkbox v-model="hamilton">Hamilton</md-checkbox>
        <md-checkbox v-model="christchurch">ChristChurch</md-checkbox>
        <md-checkbox v-model="owntruck"><i class="fas fa-user"></i> Owner Truck</md-checkbox>
        <md-checkbox v-model="curiour"><i class="fas fa-car-side"></i> Curiour</md-checkbox>
        <md-checkbox v-model="truck"><i class="fas fa-truck"></i>Truck</md-checkbox>
      </div>
      <div class="select-box">
        <md-field>
          <label>Action</label>
          <md-select v-model="selectbox" name="action" id="action">
            <md-option value="action">Action</md-option>
            <md-option value="order">Order</md-option>
          </md-select>
        </md-field>
      </div>
      <md-field md-clearable class="md-toolbar-section-end">
        <md-input placeholder="#Search Pick Orders, Sales Orders " v-model="search" @input="searchOnTable" />
        <md-button class="md-icon-button">
          <md-icon>menu</md-icon>
        </md-button>
      </md-field>
    </md-toolbar>
    <md-drawer :md-active.sync="showNavigation">
      <md-toolbar class="md-transparent" md-elevation="0">
        <span class="md-title">Navigation</span>
      </md-toolbar>

      <md-list>
        <md-list-item href="https://google.com" target="_blank">Link</md-list-item>
        <md-list-item href="https://google.com" target="_blank">Link</md-list-item>
        <md-list-item href="https://google.com" target="_blank">Link</md-list-item>
        <md-list-item href="https://google.com" target="_blank">Link</md-list-item>
        <md-list-item href="https://google.com" target="_blank">Link</md-list-item>
      </md-list>
    </md-drawer>
  </div>
</template>

<script>
const toLower = text => {
  return text.toString().toLowerCase()
}

const searchByName = (items, term) => {
  if (term) {
    return items.filter(item => toLower(item.name).includes(toLower(term)))
  }

  return items
}
export default {
  name: 'ToolBar',
  props: {
    msg: String
  },
  data: () => ({
    array: [],
    selectbox:"action",
    truck: null,
    curiour: null,
    owntruck: null,
    auckland: null,
    otahuhu: null,
    hamilton: null,
    christchurch:null,
    searched: [],
    indeterminate: true,
    Action: 'Action',
    search:null,
    showNavigation: false
  }),
  methods: {
    newUser () {
      window.alert('Noop')
    },
    searchOnTable () {
      this.searched = searchByName(this.users, this.search)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ToolBarUl{
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  width: 100%;
  padding-left: 0px;
}
.ToolBarUl li{
  list-style: none;
  border: 0px solid #2c3e50;
  text-align: left;
  line-height: 2px;
  height: 100px;
  width: 30%;
  margin: 0 30px;
}
.md-checkbox {
  margin: 5px 10px 5px 0;
}
a {
  color: #42b983;
}

.ToolBarUl .lastLi{
  list-style: none;
  border: 0px solid #2c3e50;
  text-align: left;
  line-height: 2px;
  padding: 2px;
  height: 100px;
  width: 5%;
  margin: 0 2px;
  padding-left: 0px;
}

.head-toolbar{
  display: flex;
  width: 100%;
  align-items: start;
}
.check-box-group{
  width: 40%;
  margin-top: 0px;
  padding-top: 10px!important;
}
.select-box {
  width: 25%;
  padding: 8px 20px;
}
.md-toolbar-section-end{
  padding: 0px 20px;
}


</style>

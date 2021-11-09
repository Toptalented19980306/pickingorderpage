<template>
  <div id="app">
    <ToolBar/>
    <br>
    <OrderList/>
  </div>
</template>

<script>
import ToolBar from "./Home/ToolBar";
import OrderList from "./Home/OrderList";

export default {
  name: 'App',
  components: {
    OrderList,
    ToolBar
  }
}
</script>

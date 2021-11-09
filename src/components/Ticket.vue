<template>
  <div id="ticket">
    <ToolBar/>
    <br>
    <PickOrder/>
  </div>
</template>

<script>
import ToolBar from "./Home/ToolBar";
import PickOrder from "./Ticket/PickOrder";

export default {
  name: 'Ticket',
  components: {
    PickOrder,
    ToolBar
  }
}
</script>
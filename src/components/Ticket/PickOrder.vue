<template>
 <div class="md-layout md-gutter">
    <div class="md-layout-item">
      <h6>Now rule for</h6>
      <h2>Picking Order Creation</h2>
      <br>
      <v-form>
        <v-container fluid>
          <v-row>
            <v-col cols="12" sm="7">
              <h4>Rule name</h4>
              <br>
              <v-text-field
                label="Enter rule name"
                single-line
                outlined
              >
              </v-text-field>
            </v-col>

            <v-col cols="12" sm="12">
              <h4>On tickets with these properties:</h4>
              <v-card
                class="mx-auto"
                max-width="100%"
                cols="12" sm="12">
                <v-card-actions>
                  <v-radio-group v-model="row" row>
                    <v-radio label="Match ANY of the below" name="radios" value="radio-1"></v-radio>
                    <v-radio label="Match ALL of the below" name="radios" value="radio-2"></v-radio>
                  </v-radio-group>
                </v-card-actions>
                <v-divider></v-divider>

                <v-card-actions
                  class="middle"
                >
                  <v-container fluid>
                  <v-row>
                  <v-col
                    class="d-flex"
                    cols="12"
                    sm="4"
                  >
                    <v-select
                      :items="items"
                      label="Ticket"
                      dense
                      outlined
                    ></v-select>
                  </v-col>
                  <v-col
                    class="d-flex"
                    cols="12"
                    sm="4"
                  >
                    <v-select
                      :items="items"
                      label="Subject"
                      dense
                      outlined
                    ></v-select>
                  </v-col>
                  <v-col
                    class="d-flex"
                    cols="12"
                    sm="4"
                  >
                    <v-select
                      :items="items"
                      label="Contains"
                      dense
                      outlined
                    ></v-select>
                  </v-col>
                  <v-col
                    class="d-flex"
                    cols="12"
                    sm="12"
                  >
                    <v-select
                      v-model="value"
                      :items="items"
                      chips
                      label="Chips"
                      dense
                      multiple
                      outlined
                    ></v-select>
                  </v-col>
                  <v-col>
                    <v-switch
                      v-model="switch1"
                      label="Match case"
                    >
                    </v-switch>
                  </v-col>
                  </v-row></v-container>
                </v-card-actions>
                <v-divider></v-divider>

                <v-card-actions>
                  <v-btn
                    tile
                    color="success"
                    id="condition1"
                  >
                    <v-icon left>
                      mdi-plus
                    </v-icon>
                    <span>Add new condition</span>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
          <br><br>
          <v-row
            class="center"
          >
            <v-col
              cols="12"
              sm="12"
            >
              <v-btn
                class="rounded"
                rounded
                tile
                color="success"
                id="condition1"
              >
              <v-icon left>
                mdi-plus
              </v-icon>
              <span>Add new filter</span>
              </v-btn>
            </v-col>
          </v-row>
          <br><br>
          <v-row>
            <v-col cols="12" sm="12">
              <h4>Perform these actions:</h4>
              <v-card
                class="mx-auto"
                max-width="100%"
                cols="12" sm="12">
                <v-card-actions
                  class="middle"
                >
                  <v-container fluid>
                    <v-row>
                      <v-col
                        class="d-flex"
                        cols="12"
                        sm="6"
                      >
                        <v-select
                          :items="items"
                          label="Set type as"
                          dense
                          outlined
                        ></v-select>
                      </v-col>
                      <v-col
                        class="d-flex"
                        cols="12"
                        sm="4"
                      >
                        <v-select
                          :items="items"
                          label="Tracking"
                          dense
                          outlined
                        ></v-select>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-actions>
                <v-divider></v-divider>

                <v-card-actions>
                  <v-btn
                    tile
                    color="success"
                    id="condition1"
                  >
                    <v-icon left>
                      mdi-plus
                    </v-icon>
                    <span>Add new action</span>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
          <br><br>
          <v-divider></v-divider>
          <br>
          <v-row>
            <v-btn
              class="primary"
              small
              color="primary"
              dark
            >
              Preview and save
            </v-btn>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <v-btn
              small
            >
              <strong>Cancel</strong>
            </v-btn>
          </v-row>
        </v-container>
      </v-form>
    </div>
    <div class="md-layout-item md-size-20">
      <h4>Rules that run on ticket creation</h4>
      <br>
      <p>
        Ticket creation rules allow you to
        setup your support workflows by 
        performing a predefined set of actions 
        on newly created tickets.<br><br>
        <i>Example: For all emails  related to 
        refunds, you can <strong>automatically:</strong><br><br>
        <strong>-Route</strong> it to your Billing group<br><br>
        <strong>-Notify</strong> your agent, and cutomer via email<br><br>
        <strong>-Set ticket properties</strong> like Priority to Medium, and even<br><br>
        <strong>-Trigger a webhook</strong> to update  the details in your billing software.<br><br></i>
        Remember, the order of  the 'Ticket Creation' rules  are important. For each 
        incoming ticket, the first matching rule will get executed, and stop. You can 
        reorder the list of rules to have the most important rules on top.<br>
        <a href="">Learn More</a>
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'PickOrder',
  data: () => ({
    switch1: true,
    row: 'radio-1',
    items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
    value: ['foo', 'bar', 'fizz', 'buzz'],
  }),
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .md-layout
  {
    width: 98%;
    margin: 0px auto !important;
  }

  .md-size-20
  {
    background-color: #e5e6e7;
    padding: 15px;
  }

  h6
  {
    margin: 0px;
  }

  h2
  {
    margin-top: 0px;
  }

  label
  {
    left: 0px !important;
  }

  span
  {
    color: black;
  }

  button i
  {
    border-radius: 50%;
    background-color: #1867c0;
  }

  label.v-label--active 
  {
    transform: translateY(-20px) scale(.75) !important;
  }

  .middle
  {
    background-color: #e5e6e7;
  }

  .center
  {
    text-align: center;
  }

  .rounded
  {
    border-radius: 20px;
  }

  .primary
  {
    background-color: #2f4a66;
  }
</style>

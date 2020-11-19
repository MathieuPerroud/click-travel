<template>
  <div class="container">
    <div class="toolbar">
      <Logo />
    </div>
    <div class="content">
      <div>
        <h1 class="title">Tickets available...</h1>
        <Ticket 
          v-if="ticket!=null"
          v-bind:passenger="ticket.passenger"
          v-bind:flight="ticket.flight"
          v-bind:from="ticket.from"
          v-bind:to="ticket.to"
          v-bind:classs="ticket.classs"
          v-bind:gate="ticket.gate"
          v-bind:seat="ticket.seat"
          v-bind:number="ticket.time"
        />
        <div v-if="tickets.length > 0" class="links">
          <a 
            href="#" 
            v-for="ticket in tickets" 
            :key="ticket.flight" 
            class="giant-button"
            @click="selectTicket(ticket)"
            >{{ ticket.flight }}
            </a>
        </div>
        <a 
            class="giant-button"
            @click="selectTicket({
              passenger:'Johnson McCallaugh',
              flight:'GZ745',
              from:'EARTH',
              to:'HEAVEN',
              classs:'Tilted Class',
              gate: 'C17',
              seat:'7Z',
              time:'13:24'
            })"
            >GZ745
            </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'tickets',
  props: ['code'],
  data(){
    return {
      tickets: [],
      ticket:null
    };
  },
  computed:{},
  mounted(){
    this.getTicketsFromCode()
  },
  methods: {
    async getTicketsFromCode() {
      let res = await this.$store.dispatch('getTicketFromDestination', {
        destinationCode: code
      });
      //TODO : mapping of results + call to destination route to map code into town
      console.log(res.data.data)
      this.tickets = res.data;
    },
    selectTicket(ticket) {
      this.ticket = ticket
    }
  }
}


</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.toolbar {
  height: 80px;
  background-color: #35495e;
  align-self: flex-start;
  width: 100%;
}

.content {
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-image: url('~assets/airplane.jpg');
  background-size: cover;
}

.title {
  font-weight: 500;
  font-size: 58px;
  color: #fff;
  letter-spacing: 1px;
  text-shadow: 1px 1px 4px #000;
  text-align: center;
}

.links {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  padding-top: 15px;
  & > * {
    margin: 5px;
  }
}
</style>

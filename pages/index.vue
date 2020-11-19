<template>
  <div class="container">
    <div class="toolbar">
      <Logo />
    </div>
    <div class="content">
      <div>
        <h1 class="title">Choose your dream destination...</h1>
        <div v-if="dreamDestinations.length > 0" class="links">
          <a 
            v-for="dest in dreamDestinations" 
            :key="dest.code" 
            @click="$router.push({name: 'tickets', params: dest.code })"
            class="giant-button"
            >{{ dest.name }}
            </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'destinations',
  data(){
    return {
      dreamDestinations: []
    };
  },
  computed:{},
  mounted(){
    this.getDreamDestinations()
  },
  methods: {
    async getDreamDestinations() {
      let res = await this.$store.dispatch("getDreamDestinations");
      console.log(res.data.data)
      this.dreamDestinations = res.data;
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

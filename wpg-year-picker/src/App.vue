<template>
  <div id="app">
    <a-year-picker v-model="year" size="large" placeholder="请选择年份"/>
  </div>
</template>

<script>
    import moment from 'moment';

    export default {
        name: 'app',
        data() {
            return {
                year: moment()
            }
        },
        watch: {
            year(val) {
                console.log('update year：', val)
            }
        },
        methods: {}
    }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>

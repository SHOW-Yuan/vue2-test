<template>
  <div class="hello">
    <h1 @click="qwe">{{ msg }}</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      default: '哈哈哈哈哈哈哈'
    },
  },
  methods: {
    qwe(){
      const queryName = 'queryName';

      this.$router.push('/toc');
      this.$router.push({ path: '/tod' });
      this.$router.push({ name: 'test', params: { qwe: '123' } });
      // 如果提供了path， params会被忽略 可以使用下面方式
      this.$router.push({ path: '/to', query: { qwe: 123 } });
      this.$router.push({ name: 'test', parmas: { qwe: 123 } });
      this.$router.push({ path: `/to/${queryName}` });
      this.$router.push(`/to/${queryName}`);

      // replace是替换当前路由 不会有记录
      this.$router.replace('/to');

      // $router.push() === window.history.pushState()
      // $router.replace() === window.history.replaceState()
      // $router.go() === window.history.go()
    }
  },
  beforeRouteEnter(to, form, next){
    console.log(11111,to, form);
    next(vm=>{
      console.log(vm);
    })
  },
  beforeRouteUpdate(to, form){
    console.log(22222,to, form);
  },
  beforeRouteLeave(to, form){
    console.log(33333,to, form);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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

<template>
  <div>导航栏 | 
  <router-link to="/">Nicey</router-link> | 
  <router-link to="/xxx">Nicey2</router-link></div>
  <hr/>
  <router-view />
</template>

<script>

export default {
  name: 'App',

}
</script>

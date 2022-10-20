<template>
  <div>
    <h1>Button 示例</h1>
    <Demo :component="Button1" />
    <Demo :component="Button2Demo" />
    <Demo :component="Button3Demo" />
    <Demo :component="Button4Demo" />
    <Demo :component="Button5Demo" />
  </div>
</template>

<script lang="ts">
import Demo from "./Demo.vue";
import {Button1} from "./Button1.demo";
import Button2Demo from "./Button2.demo.vue";
import Button3Demo from "./Button3.demo.vue";
import Button4Demo from "./Button4.demo.vue";
import Button5Demo from "./Button5.demo.vue";
export default {
 components: {
    Demo
  },
  setup() {
    return {
      Button1,
      Button2Demo,
      Button3Demo,
      Button4Demo,
      Button5Demo
    };
  },
};
</script>
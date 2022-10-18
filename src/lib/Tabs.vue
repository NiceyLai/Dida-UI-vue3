<template>
<div>
  Tabs 组件
  <component :is="defaults[0]" />
  <component :is="defaults[1]" />
</div>
</template>

<script lang="ts">
import Tab from './Tab.vue'
export default {
    setup(props, context) {
        const defaults = context.slots.default();
        defaults.forEach((tag) => {
            if (tag.type !== Tab) {
                throw new Error ('Tabs 子标签必须是Tab')
            }
        })
        return {
            defaults
        }
        
    }
}
</script>
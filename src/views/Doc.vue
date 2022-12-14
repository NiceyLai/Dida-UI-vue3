<template>
  <div class="layout">
    <Topnav :toggleMenuButtonVisible="true" class="nav" />
    <div class="content">
      <aside v-if="menuVisible">
        <div>
          <h2>文档</h2>
          <ol>
            <li>
              <router-link to="/doc/intro">介绍</router-link>
            </li>
            <li>
              <router-link to="/doc/install">安装</router-link>
            </li>
            <li>
              <router-link to="/doc/get-started">开始使用</router-link>
            </li>
          </ol>
          <h2>组件列表</h2>
          <ol>
            <li>
              <router-link to="/doc/switch">Switch 组件</router-link>
            </li>
            <li>
              <router-link to="/doc/button">Button 组件</router-link>
            </li>
            <li>
              <router-link to="/doc/dialog">Dialog 组件</router-link>
            </li>
            <li>
              <router-link to="/doc/tabs">Tabs 组件</router-link>
            </li>
          </ol>
        </div>
      </aside>
      <main>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";
import {
  inject,
  onMounted,
  onUnmounted,
  provide,
  reactive,
  ref,
  Ref,
  watchEffect,
} from "vue";
import { router } from "../router";
import { debounce } from "../debounce";
export default {
  components: { Topnav },
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible");
    const data = reactive({
      listenerPageWidthFn: () => {},
      pageWidth: document.documentElement.clientWidth,
    });
    const watchPageWidth = () => {
      const listenerPageWidth = debounce(() => {
        data.pageWidth = document.documentElement.clientWidth;
      }, 300);
      window.addEventListener("resize", listenerPageWidth);
      return listenerPageWidth;
    };
    watchEffect(() => {
      if (data.pageWidth >= 896) {
        menuVisible.value = true;
      }
    });
    onMounted(() => {
      data.listenerPageWidthFn = watchPageWidth();
    });
    onUnmounted(() => {
      window.removeEventListener("resize", data.listenerPageWidthFn);
    });
    return { menuVisible };
  },
};
</script>

<style lang="scss">
$aside-index: 10;

.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;

  > .nav {
    flex-shrink: 0;
  }

  > .content {
    display: flex;
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 200px;
    > aside {
      flex-shrink: 0;
      background: linear-gradient(
        180deg,
        rgba(227, 255, 253, 1) 0%,
        rgba(183, 233, 230, 1) 100%
      );
      min-width: 190px;
      padding: 85px 0 16px;
      position: fixed;
      top: 0;
      left: 0;
      height: 100%;
      z-index: $aside-index;
      > div {
        display: flex;
        flex-direction: column;
        width: 100%;
        > h2 {
          margin-bottom: 4px;
          padding: 0 16px;
        }
        > ol {
          > li {
            > .router-link-active {
              background: white;
            }
            > a {
              display: block;
              padding: 10px 32px;
              text-decoration: none;
            }
          }
        }
      }
    }

    > main {
      flex-grow: 1;
      padding: 16px;
      background: #fff;
      overflow: auto;
    }

    @media (max-width: 500px) {
      padding-left: 0;
      > aside {
        min-width: 50%;
      }
    }
  }
}
</style>

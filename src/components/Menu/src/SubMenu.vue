<template>
    <li>
        <slot name="title"></slot>
        <ul class="submenu__list--wraper">

            <li v-for="menu in submenus" :key="menu.id" :path="menu.path">{{menu.name}}</li>
        </ul>
    </li>

</template>
<style lang="postcss" scoped>
.submenu__list--wraper {
  list-style: none;
  width: auto;
  min-width: 115px;
  font-size: 14px;
  top: 100%;
  padding: 0;
  margin: 0;
  position: absolute;
  margin-top: 7px;
  background-color: #fff;
  border-radius: 4px;
  -webkit-box-shadow: 0 0 4px rgba(0, 0, 0, 0.17);
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.17);
  z-index: 100;
  text-align: center;
}
</style>

<script>
export default {
  name: "Submenu",
  props: {
    submenus: Array
  }
};
</script>


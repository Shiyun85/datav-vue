<template>
    <li class="header-menu-item">
        <router-link :to="path">
            <slot>
            </slot>
        </router-link>
    </li>
</template>
<script>
export default {
  props: ["path"]
};
</script>


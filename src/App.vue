<template>
  <div>
    <AppHeader />
    <UserList />
  </div>
</template>

<script>
import UserList from './components/UserList.vue';
import AppHeader from './layouts/AppHeader.vue';
export default {
  name: 'App',
  components: {
    UserList,
    AppHeader
  }
}
</script>

<style lang="scss" scoped></style>
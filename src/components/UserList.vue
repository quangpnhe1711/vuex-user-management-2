<template>
  <div>
    <div class="flex justify-between ml-30 mr-30 my-4 ">
      <h1 class=" font-bold text-[1.2vw]">
        User List
      </h1>
      <div>
        <button class="bg-green-500 cursor-pointer text-white px-2 py-1 rounded" @click="handleOpenAddUserModal">Add
          User</button>
      </div>
    </div>
    <div class="flex justify-center">
      <table class="min-w-[80vw] bg-white border-separate border-spacing-y-3">
        <thead>
          <tr>
            <th class="py-2 px-4 border-b">User</th>
            <th class="py-2 px-4 border-b">Age</th>
            <th class="py-2 px-4 border-b">Programming Languages</th>
            <th class="py-2 px-4 border-b">Gender</th>
            <th class="py-2 px-4 border-b">Action</th>
          </tr>
        </thead>
        <tbody>
         <user-item v-for="user in userList" :key="user.id" :user="user"></user-item>
        </tbody>
      </table>
    </div>
    <teleport to="#app">
      <FormUser :isOpen="isOpen" :handleCloseModal="handleCloseModal" />
    </teleport>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import FormUser from './FormUser.vue';
import UserItem from './UserItem.vue';
const { mapGetters } = createNamespacedHelpers('user');

export default {
  name: 'UserList',
  components: { FormUser, UserItem },
  computed: {
    ...mapGetters({
      userList: 'getAllUsers'
    })
  },
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    handleOpenAddUserModal() {
      this.isOpen = true;
    },
    handleCloseModal() {
      this.isOpen = false;
    }
  }
}
</script>

<style lang="scss" scoped></style>
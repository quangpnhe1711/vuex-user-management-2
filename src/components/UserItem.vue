<template>
  <tr class="text-center">
    <td class="text-left">
      <img :src="user.avatar" alt="Avatar" class="w-10 h-10 rounded-full inline-block mr-2">
      {{ user.name }}
    </td>
    <td>
      {{ user.age }}
    </td>
    <td>
      <div class="px-2 py-1 bg-purple-500 text-white font-bold inline-block rounded mr-1"
        v-for="language in user.programmingLanguages" :key="language">
        {{ language }}
      </div>
    </td>
    <td>
      {{ user.gender }}
    </td>
    <td>
      <button class="bg-blue-500 text-white px-2 py-1 rounded mr-1 cursor-pointer">Edit</button>
      <button class="bg-red-500 text-white px-2 py-1 rounded cursor-pointer">Delete</button>
    </td>
  </tr>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

export default {
  props: {
    user: {
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped></style>
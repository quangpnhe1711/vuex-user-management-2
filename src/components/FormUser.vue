<template>
  <div>
    <app-modal :isOpen="isOpen" :handleCloseModal="handleCloseModal">
      <template #header>
        {{ userData ? 'Edit User' : 'Add User' }}
      </template>

      <form class="flex flex-col px-4" @submit.prevent="handleSubmitForm">
        <!-- Name -->
        <div class="mb-4 w-full">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Name</label>
          <input id="name" type="text" placeholder="Enter name" v-model="user.name"
            class="w-full border border-purple-600 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400" />
        </div>

        <!-- Age -->
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="age">Age</label>
          <input id="age" type="number" placeholder="Enter age" v-model.number="user.age"
            class="w-full border border-purple-600 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400" />
        </div>

        <!-- Avatar -->
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="avatar">Avatar URL</label>
          <input id="avatar" type="text" placeholder="Enter avatar URL" v-model="user.avatar"
            class="w-full border border-purple-600 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400" />
        </div>

        <!-- Programming Languages -->
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">Programming Languages</label>
          <div class="flex gap-4 flex-wrap">
            <label class="inline-flex items-center">
              <input type="checkbox" value="Java" v-model="user.programmingLanguages"
                class="form-checkbox my-checkbox" />
              <span class="ml-2">Java</span>
            </label>
            <label class="inline-flex items-center">
              <input type="checkbox" value="PHP" v-model="user.programmingLanguages"
                class="form-checkbox my-checkbox" />
              <span class="ml-2">PHP</span>
            </label>
            <label class="inline-flex items-center">
              <input type="checkbox" value="C#" v-model="user.programmingLanguages" class="form-checkbox my-checkbox" />
              <span class="ml-2">C#</span>
            </label>
            <label class="inline-flex items-center">
              <input type="checkbox" value="Python" v-model="user.programmingLanguages"
                class="form-checkbox my-checkbox" />
              <span class="ml-2">Python</span>
            </label>
          </div>
        </div>

        <!-- Gender -->
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">Gender</label>
          <div class="flex gap-4">
            <label class="inline-flex items-center">
              <input type="radio" value="Nam" v-model="user.gender" class="my-radio" />
              <span class="ml-2">Male</span>
            </label>
            <label class="inline-flex items-center">
              <input type="radio" value="Nữ" v-model="user.gender" class="my-radio" />
              <span class="ml-2">Female</span>
            </label>
            <label class="inline-flex items-center">
              <input type="radio" value="Khác" v-model="user.gender" class="my-radio" />
              <span class="ml-2">Other</span>
            </label>
          </div>
        </div>

        <!-- User Type -->
        <div class="flex items-center mb-4">
          <label class="inline-block text-gray-700 text-sm font-bold w-32">User Type:</label>
          <select v-model="user.type"
            class="w-full h-10 border border-purple-600 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400">
            <option value="">Select user type</option>
            <option value="ADMIN">Admin</option>
            <option value="CLIENT">Client</option>
          </select>
        </div>

        <!-- Description -->
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">Description</label>
          <textarea v-model="user.description" rows="4"
            class="w-full border border-purple-600 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            placeholder="Description"></textarea>
        </div>

        <!-- Submit -->
        <div class="flex justify-center">
          <button type="submit" class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
            {{ userData ? 'Update User' : 'Add User' }}
          </button>
        </div>
      </form>
    </app-modal>
  </div>
</template>

<script>
import AppModal from '../layouts/AppModal.vue'
import { createNamespacedHelpers } from 'vuex'

const { mapActions } = createNamespacedHelpers('user');

export default {
  components: { AppModal },
  name: 'FormUser',
  props: {
    userData: { type: Object, default: null },
    isOpen: { type: Boolean, default: false },
    handleCloseModal: { type: Function, required: true }
  },
  data() {
    return {
      user: {
        name: '',
        age: null,
        avatar: '',
        programmingLanguages: [],
        gender: '',
        type: '',
        description: ''
      }
    }
  },
  created() {
    if (this.userData) {
      this.user = { ...this.userData }
    }
  },
  methods: {
    handleSubmitForm() {
      if (this.userData) {
        // TODO: gọi action update user nếu cần
      } else {
        this.addUser(this.user);
        this.handleCloseModal();
        this.resetForm();
      }
    },
    resetForm() {
      this.user = {
        name: '',
        age: null,
        avatar: '',
        programmingLanguages: [],
        gender: '',
        type: '',
        description: ''
      }
    },
    ...mapActions({
      addUser: 'addNewUserAction'
    })
  }
}
</script>

<style scoped>
.my-checkbox {
  width: 20px;
  height: 20px;
  accent-color: #9C5EC6;
}

.my-radio {
  width: 20px;
  height: 20px;
  accent-color: #9C5EC6;
}
</style>

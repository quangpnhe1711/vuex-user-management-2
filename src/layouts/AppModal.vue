<template>
  <div v-if="isOpen">
    <div class="fixed inset-0 bg-black opacity-50"></div>
    <div class="fixed inset-0 flex items-center justify-center">
      <div class="bg-white p-6 rounded shadow-lg w-1/3 flex-col ">
        <!-- Header -->
        <div class="flex justify-between items-center mb-5">
          <h2 class="text-2xl font-bold">
            <slot name="header">Modal Title</slot>
          </h2>
          <button class="bg-amber-500 text-white px-4 py-2 rounded-full font-bold"
            @click="handleCloseModal">
            X
          </button>
        </div>

        <!-- Body -->
        <div>
          <slot></slot>
        </div>

        <!-- Footer -->

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppModal',
  props: {
    isOpen: {
      type: Boolean,
      default: false
    },
    handleCloseModal: {
      type: Function,
      required: true
    }
  }
}
</script>

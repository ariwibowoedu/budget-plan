<template>
  <div class="relative overflow-hidden bg-white rounded-xl shadow-md p-6">
    <div
      class="absolute inset-0 bg-gradient-to-r from-transparent via-gray-200 to-transparent animate-shimmer z-10"
    ></div>
    <div class="relative z-20">
      <div class="flex items-center justify-between mb-4">
        <div class="h-4 bg-gray-300 rounded-w-1/3"></div>
        <div class="flex gap-2">
          <div class="w-4 h-4 bg-gray-300 rounded-full"></div>
          <div class="w-4 h-4 bg-gray-300 rounded-full"></div>
        </div>
      </div>
      <div class="h-6 bg-gray-200 rounded w-2/3 mt-4"></div>
    </div>
  </div>
</template>

<style scoped>
@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.animate-shimmer {
  animation: shimmer 1.5s infinite;
  background-size: 200% 100%;
  background-repeat: no-repeat;
}
</style>
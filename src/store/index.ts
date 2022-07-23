import { defineStore } from 'pinia'

export const useHeartStore = defineStore('heart', {
  state: () => {
    return {
      count: 0
    }
  },
  actions: {
    addCount() {
      this.count++
    }
  }
})

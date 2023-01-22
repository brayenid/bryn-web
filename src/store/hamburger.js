import { defineStore } from 'pinia'

export const useHamburgerButton = defineStore('hamburger', {
  state: () => {
    return {
      hamburgerEl: null
    }
  }
})

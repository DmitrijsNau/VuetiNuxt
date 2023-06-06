import { defineStore } from 'pinia'

export const useFilterStore = defineStore('filter', {
  state: ()=>({
    filteredList: []
  }),
})

export default useFilterStore
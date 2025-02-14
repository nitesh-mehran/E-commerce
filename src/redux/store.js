import { configureStore } from '@reduxjs/toolkit'
import cartSlice  from './card/cardSlice'

export const store = configureStore({
    reducer: {
        allcards : cartSlice
      }
    
})
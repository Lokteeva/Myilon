import { configureStore } from '@reduxjs/toolkit'
import filter from './slices/filterSlice'
<<<<<<< HEAD
import cart from './slices/cartSlice'
=======
>>>>>>> fc08b5cc2c7445d79edcab2c5c946ff29c1b1c0f

export const store = configureStore({
  reducer: {
    filter,
<<<<<<< HEAD
    cart,
=======
>>>>>>> fc08b5cc2c7445d79edcab2c5c946ff29c1b1c0f
  },
})

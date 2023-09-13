import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categoryId: 0,
<<<<<<< HEAD
  currentPage: 1,
=======
>>>>>>> fc08b5cc2c7445d79edcab2c5c946ff29c1b1c0f
  sort: {
    name: 'популярности',
    sortProperty: 'rating',
  }
}

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId(state, action){
      state.categoryId = action.payload;
    },
    setSort(state, action){
      state.sort = action.payload;
<<<<<<< HEAD
    },  
    setCurrentPage(state, action){
      state.currentPage = action.payload;
    },
    setFilters(state, action){
      state.currentPage = Number(action.payload.currentPage);
      state.currentPage = action.payload.currentPage;
      state.categoryId = Number(action.payload.categoryId);
    }   
    },  
})

export const { setCategoryId, setSort, setCurrentPage, setFilters } = filterSlice.actions
=======
    }    
    },  
})

export const { setCategoryId, setSort } = filterSlice.actions
>>>>>>> fc08b5cc2c7445d79edcab2c5c946ff29c1b1c0f

export default filterSlice.reducer;
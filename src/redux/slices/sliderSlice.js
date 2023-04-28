import { createSlice } from '@reduxjs/toolkit'

export const sliderSlice = createSlice({
  name: 'slider',
  initialState: {
    images: [
      'https://vgneumaticos.com.ar/wp-content/uploads/2020/11/promos-874x1024.png',
      'https://fvandina.com/wp-content/uploads/2020/05/promociones.jpg',
      'https://d1ih8jugeo2m5m.cloudfront.net/2022/01/promocion-1-1200x685.jpg',
      'https://www.ceupe.com/images/easyblog_articles/3298/tipos-de-promocion-de-ventas.png'
    ]
  },
  reducers: {
    addImage: (state, action) => {
      state.images.push(action.payload)
    }
  }
})

export const { addImage } = sliderSlice.actions

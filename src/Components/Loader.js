import React from 'react'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import { Audio } from 'react-loader-spinner'
const Loader = () => {
  return (
    <div>
      <Audio width="100" height="100" color="grey" areaLabel="loading" />
    </div>
  )
}

export default Loader

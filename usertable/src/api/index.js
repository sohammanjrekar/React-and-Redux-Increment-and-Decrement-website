import React from 'react'
import Chance from "chance"
const index = () => {
    const chance=Chance();
  
  return  chance.name({middle:true})
}

export default index

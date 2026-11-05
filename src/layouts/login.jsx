import React from 'react'
import { useLocation } from 'react-router'

const login = () => {

  const location = useLocation();

  console.log(location);

  return (
    <div>login</div>
  )
}

export default login    
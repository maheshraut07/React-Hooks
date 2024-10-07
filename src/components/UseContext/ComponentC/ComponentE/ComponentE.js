import React,{useContext} from 'react'
import ComponentF from './ComponentF/ComponentF'
import { UserContext,UserFullNameContext } from '../../../../App'

const ComponentE = () => {

  const user = useContext(UserContext)
  const UserFullName = useContext(UserFullNameContext)

  return (
    <div>
        User name is {user} , user fullName is {UserFullName}
        <ComponentF/>
    </div>
  )
}

export default ComponentE


// we will take a look how to consume the values from the higher level in this part 
// by using react's useContext Hook 
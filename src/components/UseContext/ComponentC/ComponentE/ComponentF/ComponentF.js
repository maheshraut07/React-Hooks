import React from 'react'
import { UserContext, UserFullNameContext } from '../../../../../App'

const ComponentF = () => {
  return (
    <div>
        <UserContext.Consumer>
            {
                user => {
                    return (
                        <UserFullNameContext.Consumer>
                            {
                                UserFullName =>{
                                    return(
                                    <div>
                                        User Name is {user},
                                        User Full Name is {UserFullName}
                                    </div>
                                    )
                                }
                            }
                        </UserFullNameContext.Consumer>    
                    )
                }
            }
        </UserContext.Consumer>
    </div>
  )
}

export default ComponentF 


// we have the consumed the value in this component without the use of useContext hook 
// by using react's createContext method 
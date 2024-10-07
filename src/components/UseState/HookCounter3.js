import React,{useState} from 'react'

function HookCounter3() {

  const [name,setName] = useState({firstName:'', lastName:''})
  
  return (
    <form action="">
        <input type="text"
               value = {name.firstName}
               onChange={(e) => setName({... name, firstName : e.target.value})}
        />
        <input type="text"
               value = {name.lastName}
               onChange={(e) => setName({... name, lastName : e.target.value})}

        />
        <h2>your first name is : {name.firstName}</h2>
        <h2>your last name is : {name.lastName}</h2>
        <h2>name is{JSON.stringify(name)}</h2>
    </form>
  )
}

export default HookCounter3


// use of useState hook in the form of Objets
// spread operator (... name) is used to copy all the elements in the name and just override the firstName in the name object 
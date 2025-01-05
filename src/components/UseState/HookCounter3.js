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

  /**
   The spread operator (...) is used to copy all properties from the name object into a new object.
This ensures that the existing properties in name (like lastName) are not lost when updating firstName.
After copying the existing properties, the firstName property is updated with the new value from the input.
Why It's Used:

Immutability: React state should not be mutated directly. The spread operator creates a new object, preserving immutability.
Selective Updates: The spread operator allows updating only specific properties of the state object without affecting others.
For example:

Before update: { firstName: '', lastName: '' }
Input changes firstName to John:
Using the spread operator: { ...name, firstName: 'John' } results in { firstName: 'John', lastName: '' }
This prevents the lastName from being inadvertently reset or removed.
Using the spread operator ensures that the state is updated in a controlled, predictable way, following React's best practices for state management.
   */
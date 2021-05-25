import React, { useState } from 'react'

function App() {

  const initialValues = {
    item: "",
    list: [],
  }
  const [values, setValues] = useState(initialValues);

  const onChange = (event) => {
    const { name, value } = event.target
    setValues({
      ...values,
      [name]: value
    })
  };

  const onSubmit = (event) => {
 
    setValues({
      item: "",
      list: [...values.list, values.item]
    })
  }

  const deleteItem = (index) => {
   console.log(index)
   
   const arr = values.list.slice(0, index)
   .concat(values.list.slice(index + 1, values.list.length))
   setValues({
     list: arr
   })
  
  }
  return (
    <div>
      <input value={values.item}
       onChange={onChange}
       name="item"
       label="item" />

       {values.list
        .map((item, index) => 
          <div>
            <li key={index}>{index}{item}</li>
          <button onClick={() => deleteItem(index)}>Delete</button>
          </div>
       )}
       <button onClick={onSubmit}>Submit</button>
    </div>
  )
}

export default App
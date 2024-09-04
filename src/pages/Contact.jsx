import { useState, useEffect } from "react";


export default function Contact() {

  const [ formField, setFormField] = useState("")

  const defaultData = { fname: "", lname: "", email: "", phone: "" }
  
    const [ formData, setFormData ] = useState(defaultData)
  
    async function submitForm(){
      const resp = await fetch("....", {
        method: 'POST',
        body: JSON.stringify(formData)
      })
      setFormData(defaultData)
    }
  
    function handleInputChange(event){
      // event.target.name = property that needs to be updated 
      // event.target.value = new value to be assigned 
      setFormData({...formData, [event.target.name]: event.target.value })
    }
  
    return (
      <form>
        <input type="text" name="contactName" value={formData.contactName} onChange={handleInputChange} />
        <input type="text" name="email" value={formData.email} onChange={handleInputChange} />
        <input type="text" name="msg" value={formData.msg} onChange={handleInputChange} />
  
        <button onClick={submitForm}>Submit</button>
      </form>
    )
}
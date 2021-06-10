import React, { useState } from "react"
import { v4 as uuid } from "uuid"

function ItemForm({ onItemFormSubmit, itemFormSubmit, setArray, array }) {
   const handleFormSubmission = e => {
      e.preventDefault()
      let name = e.target.name.value
      let category = e.target.category.value
      onItemFormSubmit({ name: name, category: category, id: uuid() })
      setArray([...array, itemFormSubmit])
   }

   return (
      <form className="NewItem" onSubmit={handleFormSubmission}>
         <label>
            Name:
            <input type="text" name="name" />
         </label>

         <label>
            Category:
            <select name="category">
               <option value="Produce">Produce</option>
               <option value="Dairy">Dairy</option>
               <option value="Dessert">Dessert</option>
            </select>
         </label>

         <button type="submit">Add to List</button>
      </form>
   )
}

export default ItemForm

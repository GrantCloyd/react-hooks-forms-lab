import React, { useState } from "react"
import ItemForm from "./ItemForm"
import Filter from "./Filter"
import Item from "./Item"

function ShoppingList({ items }) {
   const [selectedCategory, setSelectedCategory] = useState("All")
   const [search, onSearchChange] = useState("")
   const [itemFormSubmit, onItemFormSubmit] = useState({ name: "", category: "Produce", id: "" })
   const [array, setArray] = useState(items)

   function handleCategoryChange(event) {
      setSelectedCategory(event.target.value)
   }

   let itemsToDisplay = array.filter(item => {
      if (search !== "") {
         return item.name.toLowerCase().includes(search.toLowerCase())
      }
      if (selectedCategory === "All") return true
      if (selectedCategory !== "All") {
         return item.category === selectedCategory
      }
   })

   //  if (itemFormSubmit.name !== "") {
   //     itemsToDisplay = [...itemsToDisplay, itemFormSubmit]
   //  }

   return (
      <div className="ShoppingList">
         <ItemForm
            onItemFormSubmit={onItemFormSubmit}
            itemFormSubmit={itemFormSubmit}
            setArray={setArray}
            array={array}
         />
         <Filter onCategoryChange={handleCategoryChange} onSearchChange={onSearchChange} />
         <ul className="Items">
            {itemsToDisplay.map(item => (
               <Item key={item.id} name={item.name} category={item.category} />
            ))}
         </ul>
      </div>
   )
}

export default ShoppingList

import React from 'react';
import Item from './coffeeShop.js'

function ItemList({ items, onSell, onDelete, onUpdate, onDescribe }) {
    return (
        <div className="App">
            <h1>The Mean Bean</h1>
            <OptionList onAddItem={addItem} />
            <ItemList
                items={items}
                onSell={sellItem}
                onDelete={deleteItem}
                onUpdate={updateItem}
                onDescribe={toggleDescription} // Pass the toggleDescription function to the ItemList component
            />
            {form2visible && (
                <div>
                    <button onClick={() => toggleForm("form2")}>Return</button>
                    <h2>{selectedItem}</h2>
                    <form>
                        {/* Your radio buttons and other form elements */}
                    </form>
                    <p>{selectedDescription}</p>
                </div>
            )}
        </div>
    );
}

export default ItemList;

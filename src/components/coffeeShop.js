import React from 'react';
import PropTypes from 'prop-types';


function Item({ item, onSell, onDelete, toggleDescription }) {
    return (
        <div>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>{item.quantity > 0 ? `Quantity: ${item.quantity}` : 'Bag empty'}</p>
            <button onClick={() => onSell(item.id)}>Sell</button>
            <button onClick={() => onDelete(item.id)}>Delete</button>
            
        </div>
    );
}

Item.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
    }).isRequired,
    onSell: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    
};

export default Item;



// import React from 'react';
// import PropTypes from 'prop-types';

// import React from 'react';
// import PropTypes from 'prop-types';
// import Item from './coffeeShop.js';

// function ItemList({ items, onSell, onDelete, onUpdate, }) {
//     return (
//         <div>
//             {items.map(item => (
//                 <Item
//                     key={item.id}
//                     item={item}
//                     onSell={() => onSell(item.id)}
//                     onDelete={() => onDelete(item.id)}
//                     onUpdate={(updatedItem) => onUpdate(item.id, updatedItem)}
//                 />
//             ))}
//         </div>
//     );
// }

// ItemList.propTypes = {
//     items: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.number.isRequired,
//             name: PropTypes.string.isRequired,
//             description: PropTypes.string.isRequired,
//             quantity: PropTypes.number.isRequired,
//         })
//     ).isRequired,
//     onSell: PropTypes.func.isRequired,
//     onDelete: PropTypes.func.isRequired,
//     onUpdate: PropTypes.func.isRequired,
// };

// export default ItemList;




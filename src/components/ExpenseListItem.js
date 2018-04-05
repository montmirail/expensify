import React from 'react';
import { Link } from 'react-router-dom';


const ExpenseListItem = ({ id, description, amount, created_at, dispatch}) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{ description }</h3>
        </Link>
        <p>{ amount } - { created_at }</p>
    </div>
);

export default ExpenseListItem;
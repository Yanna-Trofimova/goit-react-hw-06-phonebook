import React from 'react';
 import {filterContact} from '../../redux/filter'
import { useDispatch, useSelector } from 'react-redux';

const Filter = () => {
    const dispatch = useDispatch();
    const  filter  = useSelector((state) => state.filter)
    
    return (
        <label>
            Find contacts by name
            <input type="text" name="filter" value={filter} onChange={e => dispatch(filterContact(e.target.value))} />
        </label>
    )
};



export default Filter
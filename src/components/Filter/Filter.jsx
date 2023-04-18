import React from 'react';
// import PropTypes from 'prop-types';
 import {filterContact} from '../../redux/filter'
import { useDispatch } from 'react-redux';

const Filter = () => {
    const dispatch = useDispatch();

    
    return (
        <label>
            Find contacts by name
            <input type="text" name="filter" onChange={e => dispatch(filterContact(e.target.value))} />
        </label>
    )
};

// Filter.propTypes = {
//     value: PropTypes.string.isRequired,
//     onChange: PropTypes.func.isRequired,
// }

export default Filter
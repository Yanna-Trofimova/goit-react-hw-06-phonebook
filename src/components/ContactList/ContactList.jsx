import React from "react";
import css from './ContactList.module.css';
import { useDispatch, useSelector } from "react-redux";
import {  removeContact } from '../../redux/items'


const ContactList = () => {
    const  contacts  = useSelector((state) => state.contacts)
    const  filterContact  = useSelector((state) => state.filter)
    const dispatch = useDispatch();
    
      const getVisibleTodos = () => {

    const normalaziedFilter = filterContact.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalaziedFilter),);
  }

  const visibleTodos = getVisibleTodos();
        
    return(    
    <ul className={css.contactList}>
        {visibleTodos.map(({ id,name, number }) => (
            <li key={id} className={css.contactItem}>

                
                <p className="TodoList__text"><span className={css.contactName} >{name}</span> :  { number}</p>
                <button 
                    type="button"
                    className={css.contactBtn}
                    onClick={() => dispatch(removeContact(id))}
                >
                    Удалить
                </button>

            </li>
        ))}
    </ul>)
}



export default ContactList
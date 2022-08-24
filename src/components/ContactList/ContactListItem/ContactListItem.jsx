import s from '../ContactList.module.css'

const ContactListItem = ({ id, number, name, onRemove }) => {
    return (
                <li>
                <span>{name}</span> - <span>{number}</span>
                <button className={s.button} onClick={() => onRemove({ id })}>Remove</button>
            </li>

)
}

export default ContactListItem;
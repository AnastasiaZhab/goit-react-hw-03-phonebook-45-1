import s from './ContactList.module.css';
import PropTypes from 'prop-types';
    
const ContactList = ({ list, onRemove }) => {
    return (<ul>
        {list.map(({ id, name, number }) => (
            <li key={id}>
                <span>{name}</span> - <span>{number}</span>
                <button className={s.button} onClick={() => onRemove({ id })}>Remove</button>
            </li>
        ))}
        </ul>
    )
};

export default ContactList;

ContactList.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
}
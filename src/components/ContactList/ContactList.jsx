import PropTypes from 'prop-types';
import ContactListItem from './ContactListItem/ContactListItem';
    
const ContactList = ({ list, onRemove }) => {
    return (<ul>
        {list.map(({ id, name, number }) => (
            <ContactListItem key={id} name={name} number={number} onRemove={onRemove} />
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
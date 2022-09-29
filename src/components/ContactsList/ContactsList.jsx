import { ContactList } from "./ContactsList.styled"
import PropTypes from "prop-types";
export const ContactsList = ({contacts, deleteContact}) => {
        return(
            <ContactList>
            {contacts.map(item => {
              return(
                <li key={item.id}>
                  <span>{item.name}:</span> 
                  <span>{item.number}</span> 
                  <button 
                    onClick={() => {deleteContact(item.id)}}
                  >delete</button>
                </li>
              )
            })}
            </ContactList>
        )
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    number: PropTypes.string,
  }))
}
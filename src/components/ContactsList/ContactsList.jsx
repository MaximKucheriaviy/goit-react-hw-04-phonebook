import { Component } from "react";
import { ContactList } from "./ContactsList.styled"
import PropTypes from "prop-types";
export class ContactsList extends Component{
    render(){
        return(
            <ContactList>
            {this.props.contacts.map(item => {
              return(
                <li key={item.id}>
                  <span>{item.name}:</span> 
                  <span>{item.number}</span> 
                  <button 
                    onClick={() => {this.props.deleteContact(item.id)}}
                  >delete</button>
                </li>
              )
            })}
            </ContactList>
        )
    }
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    number: PropTypes.string,
  }))
}
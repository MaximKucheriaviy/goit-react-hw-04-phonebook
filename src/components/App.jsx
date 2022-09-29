import { Component } from "react";
import Section from "./Section/Section";
import { nanoid } from "nanoid";
import { AddNumberForm } from "./AddNumberForm/AddNumberForm";
import { ContactsList } from "./ContactsList/ContactsList";
import { FindContactForm } from "./FindContactForm/FindContactForm";
export class App extends Component {
  
  state = {
    contacts: [],
    filter: ''
  }

  componentDidMount(){
    const localData = localStorage.getItem("phonebookContacks");
    if(localData){
      this.setState({
        contacts: JSON.parse(localData)
      })
    }
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.contacts !== this.state.contacts){
      localStorage.setItem("phonebookContacks", JSON.stringify(this.state.contacts));
    }
  }

  chageHendler = (event) => {
    const {value, name} = event.target;
    this.setState({[name]: value})
  }

  onSubmit = (formState) => {
    if(this.state.contacts.some(({name}) => name.toLowerCase() === formState.name.toLowerCase())){
      alert(`${formState.name} is already in contacts`);
      return;
    }
    const newContacts = [...this.state.contacts];
    const contact = {
      name: formState.name,
      number: formState.number,
      id: nanoid()
    }
    newContacts.push(contact);
    this.setState({contacts: newContacts})
  }

  chageFilter = (value) => {
    value = value.toLowerCase();
    this.setState({filter: value});
  }

  filterContacts = () => {
    if(!this.state.filter){
      return(this.state.contacts)
    }
    return this.state.contacts.filter(({name}) => {
      return(name.toLowerCase().includes(this.state.filter));
    })
  }

  deleteContact = (id) => {
    const newContacts = this.state.contacts.filter(item => item.id !== id);
    this.setState({
      contacts: newContacts
    })
  }
 
  render(){
    return (
      <div>
        <Section title="Phonebook">
          <AddNumberForm onSubmit={this.onSubmit}/>
        </Section>
        <Section title="Contacts">
          <FindContactForm filterChage={this.chageFilter}/>
          <ContactsList contacts={this.filterContacts()} deleteContact={this.deleteContact}/>
        </Section>
      </div>
    );
  }
};

import { nanoid } from "nanoid";
import { Component } from "react";
import { AddForm } from "./AddNumberForm.styled"
import PropTypes from "prop-types";


export class AddNumberForm extends Component{
    nameInputId = nanoid();
    telephoneInputId = nanoid();
    state = {
        name: '',
        number: ''
    }
    chageHendler = (event) => {
        const {value, name} = event.target;
        this.setState({[name]: value})
    }
    clearForm = () => {
        this.setState({
            name: '',
            number: ''
        })
    }
    onSubmitHendler = (event) =>{
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.clearForm();
    }
    render(){
        return(
            <AddForm onSubmit={this.onSubmitHendler}>
                <label htmlFor={this.nameInputId}>Name</label>
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    id={this.nameInputId}
                    required
                    onChange={this.chageHendler}
                    value={this.state.name}
                /> 
                <br />
                <label htmlFor={this.telephoneInputId}>Telephone</label>  
                <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    onChange={this.chageHendler}
                    value={this.state.number}
                    id={this.telephoneInputId}
                />
                <br />
                <button type="submit" disabled={this.state.name === "" || this.state.number === ""}>Add contact</button>
            </AddForm>
        )
    }
}

AddNumberForm.propTypes = {
    onSubmit: PropTypes.func
}
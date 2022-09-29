import { useState, useRef } from "react"
import { nanoid } from "nanoid";
import { VerticalForm } from "./FindContactForm.styled"
import PropTypes from "prop-types";

export const FindContactForm = ({filterChage}) => {
    const nameId = useRef(nanoid());
    const [name, setName] = useState("");

    const chageHendler = (event) => {
        const {value} = event.target;
        setName(value);
        filterChage(value);
    }

    return(
        <VerticalForm onSubmit={event => event.preventDefault()}>
            <label htmlFor={nameId.current}>Find contacts by name</label>
            <input 
                id={nameId.current}
                type="text" 
                name="name"
                value={name}
                onChange={chageHendler}
                autoComplete="off"
            />
        </VerticalForm>
    )
}





FindContactForm.propTypes = {
    filterChage: PropTypes.func
}
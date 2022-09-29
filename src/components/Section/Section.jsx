import {SectionStyled} from "./Section.styled"
import PropTypes from "prop-types";

export const Section = ({children, title}) => {

        return(
            <SectionStyled>
                <h2>{title}</h2>
                {children}
            </SectionStyled>
        )
}

Section.propTypes = {
    title: PropTypes.string
}
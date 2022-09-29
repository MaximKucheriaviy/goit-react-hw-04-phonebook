import styled from '@emotion/styled'


export const ContactList = styled.ul`
   margin-top: 20px;
   & > li{
    display: flex;
    gap: 10px;
        &:not(:last-child){
            margin-bottom: 10px;
        }
   }
`;


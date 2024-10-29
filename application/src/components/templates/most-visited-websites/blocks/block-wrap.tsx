import styled from 'styled-components';

const BlockWrap: React.FC = ({ children }) => (
  <StyledBlockWrap>{children}</StyledBlockWrap>
);

const StyledBlockWrap = styled.div`
    padding-left: 20px;
    padding-right: 20px;

    @media screen and (min-width: 992px) {
        max-width: 944px;
        margin-left: auto;
        margin-right: auto;
        padding-left: 30px;
        padding-right: 30px;
        box-sizing: content-box;
    }
`;

export default BlockWrap;

import styled from 'styled-components';

const ParagraphWrap: React.FC = ({ children }): JSX.Element => (
  <StyledParagraphWrap>{children}</StyledParagraphWrap>
);

const StyledParagraphWrap = styled.div`
    margin-top: 32px;

    @media screen and (min-width: 992px) {
        margin-top: 64px;
    }
`;

export default ParagraphWrap;

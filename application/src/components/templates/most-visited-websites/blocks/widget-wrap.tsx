import styled from 'styled-components';

interface Props {
    children: JSX.Element[] | JSX.Element;
    className?: string;
}

const WidgetWrap = ({ children, className }: Props): JSX.Element => (
  <StyledWidgetWrap className={className}>{children}</StyledWidgetWrap>
);

const StyledWidgetWrap = styled.div`
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 20px;
    padding-right: 20px;

    @media screen and (min-width: 992px) {
        max-width: 944px;
        padding-left: 30px;
        padding-right: 30px;
        box-sizing: content-box;
    }
`;

export default WidgetWrap;

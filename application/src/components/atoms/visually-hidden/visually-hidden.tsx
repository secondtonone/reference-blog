import styled from 'styled-components';

const VisuallyHidden = ({ children, ...props }) => (
  <VisuallyHiddenStyled {...props}>{children}</VisuallyHiddenStyled>
);

const VisuallyHiddenStyled = styled.span`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
`;

export default VisuallyHidden;

import styled from 'styled-components';

const Page = (props) => (
  <PageStyled data-test="page" {...props} />
);

const PageStyled = styled.div<{ thin?: boolean }>`
  position: relative;
  font-family: 'Inter', Ubuntu, Helvetica, Arial, sans-serif;
  width: 100%;
  height: 100%;
  min-height: ${({ thin }) => (!thin ? '100vh' : '100%')};
  display: flex;
  flex-direction: column;
  will-change: background-color, color;
  min-width: 0;
`;

export default Page;

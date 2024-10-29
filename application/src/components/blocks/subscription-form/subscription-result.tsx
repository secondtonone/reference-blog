import styled from 'styled-components';
import React from 'react';
import { BoxAdaptive, TextContent } from '~/components/atoms';

interface Props {
  text: React.ReactNode
}

const SubscriptionResult: React.FC<Props> = ({ text }) => (
  <MessageStyled data-test="subscription-success">
    <TextContent fontSize={{ _: 3, md: 5 }} lineHeight={1.6} tag="p">
      {text}
    </TextContent>
  </MessageStyled>
);

const MessageStyled = styled(BoxAdaptive)`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  height: 100%;
`;

export default SubscriptionResult;

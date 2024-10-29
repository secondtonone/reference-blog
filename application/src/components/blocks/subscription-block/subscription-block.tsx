import Block, { BlockProps } from './block';
import SubscriptionForm, { SubscriptionFormProps } from '../subscription-form';
import {
  TextContent,
  BoxAdaptive
} from '~/components/atoms';

interface Props extends SubscriptionFormProps, Omit<BlockProps, 'content'> {
  text?: React.ReactNode
}

const SubscriptionBlock: React.FC<Props> = ({
  placeholder,
  button,
  tip,
  title,
  text,
  successMessage,
  errorMessage,
  inBlock,
  shiftOff,
  shiftY = 0,
  shiftX = 0,
  maxWidthContent,
  image,
}) => (
  <Block
    shiftY={inBlock ? shiftY : 103}
    shiftX={inBlock ? shiftX : 60}
    inBlock={inBlock}
    shiftOff={shiftOff}
    image={image}
    content={() => (
      <SubscriptionForm
        internal
        title={(
          <BoxAdaptive width={{ md: '100%', lg: `${maxWidthContent}px` || '100%' }}>
            <TextContent
              data-test="subscription-title"
              accentFont
              textAlign={{ _: 'left' }}
              fontSize={inBlock ? { _: 8 } : { _: 5, sm: 11, md: 16 }}
              lineHeight={{ _: 1.4 }}
              fontWeight={{ _: 'accent' }}
              marginBottom={text ? { _: '10px' } : { _: 4 }}
              as="div"
            >
              {title}
            </TextContent>
            {text ? (
              <TextContent
                data-test="subscription-text"
                textAlign={{ _: 'left' }}
                fontSize={{ _: 1, sm: 1, md: 2 }}
                lineHeight={{ _: 1.6 }}
                fontWeight={{ _: 'normal' }}
                marginBottom={{ _: '26px' }}
                as="div"
              >
                {text}
              </TextContent>
            ) : null}
          </BoxAdaptive>
          )}
        tip={(
          <TextContent
            data-test="subscription-tip"
            textAlign={{ _: 'left' }}
            fontSize={{ _: '10px', sm: 1 }}
            lineHeight={{ _: 1.5 }}
            marginTop={{ _: 3 }}
            as="div"
          >
            {tip}
          </TextContent>
          )}
        placeholder={placeholder}
        button={button}
        successMessage={successMessage}
        errorMessage={errorMessage}
      />
    )}
  />
);

export default SubscriptionBlock;

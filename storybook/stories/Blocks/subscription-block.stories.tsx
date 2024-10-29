import SubscriptionBlock from '~/components/blocks/subscription-block';
import SubscriptionForm from '~/components/blocks/subscription-form';
import { TextContent } from '~/components/atoms';

export default {
  title: 'Blocks/subscription block',
};

export const WithPng = () => (
  <SubscriptionBlock
    image={
      <img
        src="https://static.example.com/blog-next-static/banners/newsletter.png"
        width="367"
        alt="Newsletter example banner"
        data-test="banner-subscribe-png"
      />
    }
    reverse
    title="Join our newsletter"
    placeholder="Your email"
    button="Subscribe"
    tip="By clicking the button you consent to example using your contact data for newsletter purposes"
    successMessage={
      <>
        <TextContent
          accentFont
          textAlign={{ _: 'center' }}
          fontSize={{ _: 5, xm: 11, md: 16 }}
          lineHeight={{ _: 1.4 }}
          fontWeight={{ _: 'bold' }}
          marginTop={{ _: 26, xm: 0 }}
          marginBottom={{ _: 3, sm: 4 }}
          width="100%"
          as="p"
        >
          Yeah!
        </TextContent>
        You’ve successfully
        <br />
        subscribed to a newsletter
      </>
    }
    errorMessage="Something went wrong. Try one more time."
  />
);

WithPng.storyName = 'with png';

export const InBlockWithPng = () => (
  <div style={{ borderRadius: '10px', width: '660px', overflow: 'hidden' }}>
    <SubscriptionBlock
      inBlock
      shiftX={57}
      image={
        <img
          src="https://static.example.com/blogxt-static/banners/newsletter.png"
          width="187"
          alt="Newsletter example banner"
          data-test="banner-subscribe-png"
        />
      }
      title="Join our newsletter"
      placeholder="Your email"
      button="Subscribe"
      tip="By clicking the button you consent to example using your contact data for newsletter purposes"
      successMessage={
        <>
          <TextContent
            accentFont
            textAlign={{ _: 'center' }}
            fontSize={{ _: 5, xm: 11 }}
            lineHeight={{ _: 1.4 }}
            fontWeight={{ _: 'bold' }}
            marginBottom={{ _: 3, sm: 4 }}
            width="100%"
            as="p"
          >
            Yeah!
          </TextContent>
          You’ve successfully
          <br />
          subscribed to a newsletter
        </>
      }
      errorMessage="Something went wrong. Try one more time."
    />
  </div>
);

InBlockWithPng.storyName = 'in block with png';

export const InSmallBlock = () => (
  <div style={{ borderRadius: '10px', maxWidth: '328px', overflow: 'hidden' }}>
    <SubscriptionBlock
      inBlock
      title={
        <TextContent fontSize={{ _: 5 }} lineHeight={{ _: 1.4 }} as="div">
          Join our newsletter
        </TextContent>
      }
      placeholder="Your email"
      button="Subscribe"
      tip={
        <TextContent fontSize={{ _: '10px' }} lineHeight={{ _: 1.5 }} as="div">
          By clicking the button you consent to example using your contact data for newsletter
          purposes
        </TextContent>
      }
      successMessage={
        <>
          <TextContent
            accentFont
            textAlign={{ _: 'center' }}
            fontSize={{ _: 5, xm: 11 }}
            lineHeight={{ _: 1.4 }}
            fontWeight={{ _: 'bold' }}
            marginBottom={{ _: 3, sm: 4 }}
            width="100%"
            as="p"
          >
            Yeah!
          </TextContent>
          You’ve successfully
          <br />
          subscribed to a newsletter
        </>
      }
      errorMessage="Something went wrong. Try one more time."
    />
  </div>
);

InSmallBlock.storyName = 'in small block';

export const InContainer = () => (
  <div
    style={{
      borderRadius: '10px',
      maxWidth: '374px',
      border: '1px solid #E9EBEF',
      overflow: 'hidden',
    }}
  >
    <SubscriptionForm
      p={{ _: 5, sm: 7 }}
      title={
        <TextContent
          data-test="subscribe-title"
          textAlign={{ _: 'left' }}
          fontSize={{ _: 5 }}
          lineHeight={{ _: 1.6 }}
          fontWeight={{ _: 'normal' }}
          marginBottom={{ _: 3, sm: 3 }}
          as="div"
        >
          Want some fresh content in your mailbox?{' '}
          <TextContent fontWeight={{ _: 'bold' }}>Join our newsletter</TextContent>
        </TextContent>
      }
      placeholder="Your email"
      button="Subscribe"
      tip={
        <TextContent
          data-test="subscribe-tip"
          textAlign={{ _: 'left' }}
          fontSize={{ _: '10px', sm: 1 }}
          lineHeight={{ _: 1.5 }}
          marginTop={{ _: 3, sm: 3 }}
          as="div"
        >
          By clicking the button you consent to example using your contact data for newsletter
          purposes
        </TextContent>
      }
      successMessage={
        <>
          <TextContent
            accentFont
            textAlign={{ _: 'center' }}
            fontSize={{ _: 5, xm: 11 }}
            lineHeight={{ _: 1.4 }}
            fontWeight={{ _: 'bold' }}
            marginBottom={{ _: 3, sm: 4 }}
            width="100%"
            as="p"
          >
            Yeah!
          </TextContent>
          You’ve successfully
          <br />
          subscribed to a newsletter
        </>
      }
      errorMessage="Something went wrong. Try one more time."
    />
  </div>
);

InContainer.storyName = 'in container';

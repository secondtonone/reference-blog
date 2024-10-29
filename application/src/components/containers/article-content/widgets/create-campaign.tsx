import { useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import { BoxAdaptive, Image, InputField } from '~/components/atoms';
import AdsBanner, { AdsBannerProps } from '~/components/blocks/ads-banner';
import { sendAnalyticEvent } from '~/analytics';
import IntersectionContainer from '~/components/containers/intersection-container';
import { IllustGroupTokens } from '~/styles/palette';
import { getReplacedBy } from '~/utils';

const defaultBackground = 'yellowIllust';
const defaultAccent = 'purpleBrand';
const defaultImage = 'https://static.example.com/blog/uploads/files/e3/c1/e3c11aed0d9bffb525e8f7552d6b7fa1/illustration-ads-banner-205x170.svg';
const defaultLink = 'https://www.example.com/projects/#instantcreate/{value}/{value}/{tools}/wizard:open';

const valuePlaceholder = /{value}/g;
const toolsPlaceholder = /{tools}/g;

export interface CreateCampaignProps {
  placeholder?: string
  tools?: string
  image?: string
  button: string
  link?: string
  redirected?: boolean
  heading: string
  description: string
  background?: AdsBannerProps['background']
  accent?: AdsBannerProps['accent'],
  buttonColor: keyof IllustGroupTokens | 'purpleBrand',
  code?: 'short' | 'default',
  shiftY?: number
}

const linkReplacer = ({ link, value = '', tools = '' }:{ link: string, value?: string, tools?: string }) => getReplacedBy(decodeURI(link), [
  [valuePlaceholder, value],
  [toolsPlaceholder, tools],
  [/^http:\/\//i, 'https://']
]);

const textReplacer = (text: string) => getReplacedBy(text, [[/\u00A0/g, ' ']]);

const CreateCampaign: React.FC<CreateCampaignProps> = ({
  button,
  link = defaultLink,
  heading = '',
  description = '',
  background = defaultBackground,
  tools = '',
  placeholder,
  image = defaultImage,
  accent = defaultAccent,
  buttonColor,
  code = 'default',
  redirected = false,
  shiftY
}) => {
  const [url, setLink] = useState<string>(linkReplacer({ link, tools }));
  const [field, setField] = useState<string>('');
  const [error, setError] = useState<string>('');
  const { asPath } = useRouter();

  const sendAnalytics = useCallback(() => {
    sendAnalyticEvent('article-banner-url-click');
    sendAnalyticEvent('article-banner-campaign', url ? {
      action: `create_campaign_${tools}`
    } : {});
    sendAnalyticEvent('article-banner-cta-click', {
      label: button
    });
  }, [button, url, field]);

  const onClickLink: React.MouseEventHandler = useCallback((e) => {
    if (placeholder) {
      if (field) {
        sendAnalytics();
      } else {
        e.preventDefault();
        setError('The field cannot be empty');
      }
    } else {
      sendAnalytics();
    }
  }, [sendAnalytics]);

  const shownHandler = useCallback(() => {
    sendAnalyticEvent('article-banner-cta-shown', {
      label: button
    });
  }, [button]);

  const onChangeHandler = useCallback((value) => {
    setField(value);
    if (value) setError('');
    setLink(linkReplacer({ link, tools, value }));
  }, [link, tools]);

  return (
    <BoxAdaptive
      data-test="create-campaign-widget"
      position="relative"
      width={{ _: '100%', md: '800px', lg: '1010px' }}
    >
      <IntersectionContainer
        once
        onIntersection={shownHandler}
      >
        <AdsBanner
          mt={10}
          heading={textReplacer(heading)}
          description={textReplacer(description)}
          background={background}
          accent={accent}
          button={button}
          buttonColor={buttonColor}
          link={redirected ? `${asPath.split('?')[0]}login?success=${url}` : url}
          onClick={onClickLink}
          code={code}
          shiftY={shiftY}
          additional={placeholder ? (
            <BoxAdaptive
              mt={{ _: '20px', lg: '10px' }}
              mr={{ _: 0, sm: '10px' }}
            >
              <InputField
                name="param"
                autocomplete="param"
                data-test="create-campaign-widget-input"
                internal
                onChange={onChangeHandler}
                tooltipDirection="right"
                placeholder={placeholder}
                state={error ? 'invalid' : 'normal'}
                error={error}
                w={280}
              />
            </BoxAdaptive>
          ) : null}
          image={(
            <BoxAdaptive m={{ _: '0 56px 0', sm: '8px -12px 0 0', md: '-20px -5px -8px 0' }}>
              <Image
                isLazy
                src={image}
                height="202"
                alt="ADS illustration"
                data-test="banner-ads-png"
              />
            </BoxAdaptive>
            )}
        />
      </IntersectionContainer>
    </BoxAdaptive>
  );
};

export default CreateCampaign;

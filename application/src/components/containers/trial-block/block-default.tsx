import { useCallback } from 'react';
import TrialBlock from '~/components/blocks/trial-block';
import { Image } from '~/components/atoms';
import IntersectionContainer from '~/components/containers/intersection-container';
import { sendAnalyticEvent } from '~/analytics';

const buttonText = 'Get free trial';

const analyticsParams = {
  label: buttonText
};

const BlockDefault: React.FC = () => {
  const trialAnalyticsHandler = useCallback(() => {
    sendAnalyticEvent('banner-trial-shown', analyticsParams);
  }, []);

  const trialAnalyticsClickHandler = useCallback(() => {
    sendAnalyticEvent('banner-trial-click', analyticsParams);
  }, []);

  return (
    <IntersectionContainer
      once
      onIntersection={trialAnalyticsHandler}
    >
      <TrialBlock
        heading="Boost your digital marketing efforts"
        image={(
          <Image
            isLazy
            src="https://static.example.com/blog-next-static/banners/trial-gift.png"
            alt="Trial example banner"
            data-test="banner-trial-png"
            height="282"
            width="390"
          />
        )}
        imageWidth={392}
        imageHeight={282}
        button={buttonText}
        link="https://www.example.com/signup/?src=footer"
        shiftY={70}
        onClick={trialAnalyticsClickHandler}
      />
    </IntersectionContainer>
  );
};

export default BlockDefault;

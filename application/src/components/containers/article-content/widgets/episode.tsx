import { useCallback, useEffect, useRef } from 'react';
import EpisodeWidget, { EpisodeWidgetProps } from '~/components/organisms/episode-widget';
import IntersectionContainer from '~/components/containers/intersection-container';
import { sendAnalyticEvent } from '~/analytics';

export type EpisodeProps = Omit<EpisodeWidgetProps, 'onClick'>;

const Episode: React.FC<EpisodeProps> = ({ label, id, button = 'Tune-in Now' }) => {
  const wrapper = useRef<HTMLDivElement>();

  const shownHandler = useCallback(() => {
    sendAnalyticEvent('article-episode-shown', {
      label: `${id}`
    });
  }, [id]);

  const sendAnalytics = useCallback(() => {
    sendAnalyticEvent('article-episode-click', {
      label: `${id}`
    });
  }, [id]);

  useEffect(() => {
    const parent = wrapper?.current?.parentNode as HTMLElement;
    if (parent) parent.classList.add('episode-wrapper');
  }, []);

  const getRef = useCallback((ref: HTMLDivElement) => {
    wrapper.current = ref;
  }, []);

  return (
    <IntersectionContainer
      once
      onIntersection={shownHandler}
      data-test={`wrapper-for-${id}`}
      ref={getRef}
    >
      <EpisodeWidget
        label={label}
        id={id}
        button={button}
        onClick={sendAnalytics}
      />
    </IntersectionContainer>
  );
};

export default Episode;

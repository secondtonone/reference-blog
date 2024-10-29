import { useCallback } from 'react';
import BlockSurvey from '~/components/organisms/blog-survey';
import { sendAnalyticEvent } from '~/analytics';
import IntersectionContainer from '~/components/containers/intersection-container';
import surveys from '~/__fixtures__/blog-surveys';

export interface SurveyProps {
  id: string
  blocked?: string
}

const Survey: React.FC<SurveyProps> = ({
  id,
  blocked
}) => {
  const sendAnalytic = useCallback((index) => {
    sendAnalyticEvent('article-survey-click', {
      label: `${id}: ${index}`
    });
  }, [id]);

  const shownHandler = useCallback(() => {
    sendAnalyticEvent('article-survey-shown', {
      label: id
    });
  }, [id]);

  if (!surveys[id]) {
    return null;
  }

  const survey = surveys[id];

  return (
    <IntersectionContainer
      once
      onIntersection={shownHandler}
      my={60}
    >
      <BlockSurvey {...survey} onClick={sendAnalytic} inBlock={blocked} />
    </IntersectionContainer>
  );
};

export default Survey;

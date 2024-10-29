import { useIframeResize } from '~/hooks';
import { DEFAULT_HEIGHT } from './default-height';

const ChecklistFrame = () => {
  const { height, isError, onLoad } = useIframeResize(DEFAULT_HEIGHT);

  return (
    <>
      <div id="sa-m-application" />
      <script defer src="https://static.example.com/blog-next-static/widgets/migration-checklist.min.js" />
      <iframe
        style={{ height: `${height}px` }}
        onLoad={onLoad}
        src="/blog/widgets/migration-checklist/index.html"
        title="Migration Checklist"
        frameBorder="0"
        scrolling={isError ? 'vertical' : 'no'}
        className="sa-m-wrapper"
      />
    </>
  );
};

export default ChecklistFrame;

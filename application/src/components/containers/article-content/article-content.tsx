import { useContext, useMemo } from 'react';
import { ThemeContext } from 'styled-components';
import parse from 'html-react-parser';
import dynamic from 'next/dynamic';
import ArticleStyle, { ArticleStyleProps } from './article-style';
import makeElements from './elements';
import applyEffects from './effects';
import { useTweetTheme, useImages, useZoomedImage } from './hooks';

const WidgetsPortal = dynamic(
  import('~/components/containers/article-content/widgets-portal'),
  { ssr: false }
);

const ImageZoomLayout = dynamic(
  import('~/components/containers/article-content/image-zoom-layout'),
  { ssr: false }
);

interface Props extends ArticleStyleProps {
  markup: string,
  parseContent?: boolean,
  shareBlock?: React.ReactNode
}

const getJsx = (html: string) => parse(html, {
  replace: (domNode) => makeElements(applyEffects(domNode))
});

const ArticleContent: React.FC<Props> = ({
  markup,
  tableOfContent,
  sideBar,
  parseContent = true,
  shareBlock
}) => {
  if (!markup) {
    return null;
  }

  const [zoomedImageData, onClose] = useZoomedImage();

  const themeContext = useContext(ThemeContext);

  useTweetTheme('.twitter-tweet iframe', themeContext.name);

  useImages();

  return useMemo(() => (
    <>
      <ArticleStyle
        tableOfContent={tableOfContent}
        sideBar={sideBar}
        parseContent={parseContent}
        insertBottom={shareBlock}
      >
        {parseContent ? getJsx(markup) : markup}
      </ArticleStyle>
      <WidgetsPortal />
      <ImageZoomLayout {...zoomedImageData} onClose={onClose} />
    </>
  ), [markup, tableOfContent, themeContext.name, zoomedImageData, onClose]);
};

export default ArticleContent;

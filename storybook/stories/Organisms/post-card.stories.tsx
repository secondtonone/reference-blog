import { Columns, Column, Container } from '~/components/atoms';
import { PostCard } from '~/components/organisms';

import articles from '~/__fixtures__/articles';

export default {
  title: 'Organisms/post card',
};

export const Large = () => <PostCard {...articles[0]} isLarge />;

Large.storyName = 'large';

export const LargeHot = () => <PostCard {...articles[1]} isLarge />;

LargeHot.storyName = 'large:hot';

export const LargeGrid = () => (
  <Container>
    <Columns>
      {articles.slice(0, 2).map((article) => (
        <Column key={article.id} width={{ sm: '50%' }}>
          <PostCard {...article} isLarge />
        </Column>
      ))}
    </Columns>
  </Container>
);

LargeGrid.storyName = 'large:grid';

export const Small = () => <PostCard {...articles[0]} />;

Small.storyName = 'small';

export const SmallHorizontal = () => (
  <Container>
    <PostCard {...articles[0]} horizontal />
  </Container>
);

SmallHorizontal.storyName = 'small:horizontal';

export const HorizontalList = () => (
  <Container>
    <PostCard {...articles[0]} horizontal />
    <PostCard {...articles[1]} horizontal />
    <PostCard {...articles[2]} horizontal />
  </Container>
);

HorizontalList.storyName = 'horizontal:list';

export const HorizontalOnlyText = () => (
  <Container>
    <Columns>
      {articles.slice(0, 4).map((article) => (
        <Column key={article.id} width={{ sm: '100%', md: `${100 / 2}%` }}>
          <PostCard horizontal onlyText {...article} />
        </Column>
      ))}
    </Columns>
  </Container>
);

HorizontalOnlyText.storyName = 'horizontal:only text';

export const SmallGrid = () => (
  <Container>
    <Columns>
      {articles.map((article) => (
        <Column key={article.id} width={{ sm: '50%', md: `${100 / 3}%` }}>
          <PostCard {...article} />
        </Column>
      ))}
    </Columns>
  </Container>
);

SmallGrid.storyName = 'small:grid';

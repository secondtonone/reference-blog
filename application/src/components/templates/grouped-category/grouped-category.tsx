import {
  BoxAdaptive,
  PageSection,
  TextContent,
  TagControl,
  Container
} from '~/components/atoms';

import ArticlesList from '~/components/containers/articles-list';
import ArticlesEmpty from '~/components/containers/articles-empty';
import type GroupedCategoryViewModel from './grouped-category.view-model';

const GroupedCategory: React.FC<GroupedCategoryViewModel> = ({
  breakpoint,
  categoryFields,
  groups,
  children,
  tags = [],
  largeCount = 4
}) => (
  <BoxAdaptive pt={40} pb={{ _: 0, sm: '100px' }}>
    <PageSection>
      <ArticlesList
        unlinkedTitle
        cardsShow={3}
        largeCount={largeCount}
        articles={[]}
        breakpoint={breakpoint}
        data-test={`articles-list-on-page-${categoryFields?.name}`}
        categorySlug={categoryFields?.slug || ''}
        category={categoryFields?.name}
        caption={categoryFields?.description ?? ''}
        level={7}
        renderEmpty={() => null}
      />
      {tags.length > 0 ? (
        <Container>
          <BoxAdaptive mt={8}>
            {tags.map(({ link, title }) => (
              <TagControl key={title} color="yellow" href={link}>{title}</TagControl>
            ))}
          </BoxAdaptive>
        </Container>
      ) : null}
      {groups?.map(({ name, articles }) => (
        <ArticlesList
          cardsShow={3}
          largeCount={largeCount}
          articles={articles}
          breakpoint={breakpoint}
          data-test={`articles-list-on-page-${categoryFields?.name}`}
          key={`${categoryFields?.name}-${name}`}
          styles={{
            mt: {
              _: 32,
              sm: 52
            }
          }}
          category={(
            <TextContent
              accentFont
              fontSize={{ _: 6, sm: 16 }}
              level={2}
            >
              {name}
            </TextContent>
            )}
          level={7}
          renderEmpty={() => (
            <ArticlesEmpty
              heading="New episodes coming soon!"
              caption="Stay tuned for more episodes"
            />
          )}
        />
      ))}
    </PageSection>
    {children}
  </BoxAdaptive>
);

export default GroupedCategory;

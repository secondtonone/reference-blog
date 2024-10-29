import renderer from 'react-test-renderer';
import { constructParams } from '~/utils';
import BoxAdaptive from '~/components/atoms/box-adaptive';
import RequestContainer from '.';
import ArticlesList from '~/components/containers/articles-list';
import { defaultBreakpoint } from '~/utils/get-device-type';
import articles from '~/__fixtures__/articles';

const related = [5916, 5915];

describe('Match snapshots RequestContainer', () => {
  it('default', () => {
    const isBot = false;

    const tree = renderer.create(
      <RequestContainer
        method="pagesList"
        params={constructParams('id[]', ...related)}
        placeholder={
          <BoxAdaptive height={350} />
        }
        data={isBot ? articles : undefined}
      >
        {({ data }) => (
          <ArticlesList
            articles={data}
            breakpoint={defaultBreakpoint}
            largeCount={0}
            perLine={2}
            level={7}
            horizontal
            onlyText
            unwrapped
            heading="More on this"
            data-test="articles-list-more-on-this"
          />
        )}
      </RequestContainer>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('if bot', () => {
    const isBot = true;

    const tree = renderer.create(
      <RequestContainer
        method="pagesList"
        params={constructParams('id[]', ...related)}
        placeholder={
          <BoxAdaptive height={350} />
        }
        data={isBot ? articles : undefined}
      >
        {({ data }) => (
          <ArticlesList
            articles={data}
            breakpoint={defaultBreakpoint}
            largeCount={0}
            perLine={2}
            level={7}
            horizontal
            onlyText
            unwrapped
            heading="More on this"
            data-test="articles-list-more-on-this"
          />
        )}
      </RequestContainer>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('without placeholder', () => {
    const isBot = false;

    const tree = renderer.create(
      <RequestContainer
        method="pagesList"
        params={constructParams('id[]', ...related)}
        data={isBot ? articles : undefined}
      >
        {({ data }) => (
          <ArticlesList
            articles={data}
            breakpoint={defaultBreakpoint}
            largeCount={0}
            perLine={2}
            level={7}
            horizontal
            onlyText
            unwrapped
            heading="More on this"
            data-test="articles-list-more-on-this"
          />
        )}
      </RequestContainer>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

import styled from 'styled-components';
import HierarchyList from '~/components/containers/hierarchy-list';
import list from '~/__fixtures__/hierarchy-list';

const Container = styled.div`
  ul {
    list-style: none;
    padding: 0;
    margin-top: 16px;
    margin-left: 16px;
  }

  li {
    padding-bottom: 16px;
    list-style: none;
    margin: 0;

    &:last-child {
      padding-bottom: 0;
    }

    + li {
      margin: 0;
    }

    & a {
      &:hover {
        color: #ff642d !important;
      }
    }
  }
`;

export default {
  title: 'Containers/Hierarchy list',
};

export const Default = () => (
  <Container>
    <HierarchyList list={list} />
  </Container>
);

Default.storyName = 'default';

export const WithTextWrapper = () => (
  <Container>
    <HierarchyList list={list} wrapper={({ text }) => <a href="#">{text}</a>} />
  </Container>
);

WithTextWrapper.storyName = 'with text wrapper';

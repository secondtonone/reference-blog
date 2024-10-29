import { useCallback } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import {
  BoxAdaptive,
  Container,
  PageSection,
  ButtonIcon,
  TextContent
} from '~/components/atoms';

import SearchForm from '~/components/blocks/search-form';
import { sendAnalyticEvent } from '~/analytics';

import searchParams from './search-params';
import type SearchPageViewModel from './search-page.view-model';

const SearchPage: NextPage<SearchPageViewModel> = ({
  text,
  param,
  title,
  content
}) => {
  const router = useRouter();

  const searchHandler = useCallback((searchText, parameter) => {
    const { pathname, query } = router;

    const newQuery = {
      ...query,
      text: searchText,
      param: parameter,
    };

    sendAnalyticEvent('search-page-query', {
      label: searchText
    });

    router.push({
      pathname,
      query: newQuery
    });
  }, [router.query]);

  return (
    <Section pb={0}>
      <BoxAdaptive
        pt={80}
        pb={20}
        display="flex"
        justifyContent="center"
        flexDirection={{ _: 'row', lg: 'column' }}
      >
        <Container>
          <BoxAdaptive
            position="absolute"
            top={{ _: -48, sm: 0 }}
            right={{
              _: 15, x: 24, sm: 45, lg: 0
            }}
            width="auto"
          >
            <ButtonIcon
              sizes={[16, 16]}
              code="close"
              border
              colored
              onClick={useCallback(() => {
                router.push({
                  pathname: '/blog',
                });
              }, [])}
            />
          </BoxAdaptive>
          <TextContent
            fontSize={{ _: 9, sm: 19 }}
            fontWeight={{ _: 'accent' }}
            accentFont
            mb={{ _: 7 }}
            as="h1"
          >
            {title}
          </TextContent>
          <SearchForm
            maxWidth={{
              x: 560, md: 658, lg: 900
            }}
            defaultValue={text}
            defaultParam={param}
            searchParams={searchParams}
            placeholder=""
            onSubmit={searchHandler}
          />
        </Container>
      </BoxAdaptive>
      {content}
    </Section>
  );
};

const Section = styled(PageSection)`
  h1, h2 {
    color: ${({ theme }) => (theme.isLight ? theme.opposed : theme.secondary5)} !important;
  }
`;

export default SearchPage;

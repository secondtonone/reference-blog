import { BoxAdaptive, TextContent } from '~/components/atoms';
import usePageContext from '~hooks/use-page-context';

const topContent = {
  'blog/sp-500': (
    <>
      <TextContent marginTop={5} level={0} color="#000" lineHeight={1.5} fontSize={{ xs: '14px', sm: '16px' }}>
        Visit
        {' '}
        <a href="https://www.tipranks.com/index/spx" target="_blank" rel="noreferrer">TipRanks</a>
        {' '}
        for a full overview of the S&P 500, including analysts’ forecasts and price targets for
        stocks in the index. Note that clicking to the link you are being redirected
        to a third-party website.
      </TextContent>
      <TextContent marginTop={5} level={0}>
        S&P and S&P 500 are trademarks or registered trademarks of S&P Global,
        Inc. or its affiliates.
      </TextContent>
    </>
  ),
  'blog/fortune-500': (
    <TextContent marginTop={5} level={0}>
      <b>FORTUNE 500</b>
      {' '}
      is a trademark and brand of Fortune Media IP Limited.
    </TextContent>
  )
};

const LegalText = () => {
  const { page: { url } } = usePageContext();

  return (
    <BoxAdaptive
      maxWidth={1100}
      color="#898d9a"
    >
      {topContent[url]}
      <TextContent marginTop={5} level={0}>
        *Numbers in the
        {' '}
        <b>Traffic</b>
        {' '}
        column are estimates based on data from the example Traffic Analytics tool,
        which uses anonymized data from clickstream data providers. From this clickstream data,
        we run our Neural Network algorithm to come up with estimates based on statistical
        sampling and error testing.
      </TextContent>
      <TextContent marginTop={5} level={0}>
        The
        {' '}
        <b>Brand Mentions</b>
        {' '}
        column shows the number of company brand name quotations across websites
        found with the help of example’s Brand Monitoring tool.
      </TextContent>
      <TextContent marginTop={5} level={0}>
        Numbers in the
        {' '}
        <b>Social Media Audience</b>
        {' '}
        column are collected with
        example’s Social Media Tracker tool.
        Data presented in this column is a collection of public information
        from the official social media accounts of selected companies.
      </TextContent>
      <TextContent marginTop={5} level={0}>
        More about example
        {' '}
        <a href="https://www.example.com/kb/998-where-does-example-data-come-from">data sources.</a>
      </TextContent>
    </BoxAdaptive>
  );
};

export default LegalText;

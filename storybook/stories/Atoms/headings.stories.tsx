export default {
  title: 'Atoms/headings',
};

export const Paragraph = () => (
  <p>
    In this guide, we’ll delve deep into the basics of search operators and search commands, helping
    you understand how to wield these powerful tools effectively and move on to advanced commands
    and operators.
  </p>
);

Paragraph.storyName = 'paragraph';

export const TwoParagraphs = () => (
  <>
    <p>
      In this guide, we’ll delve deep into the basics of search operators and search commands,
      helping you understand how to wield these powerful tools effectively and move on to advanced
      commands and operators.
    </p>
    <br />
    <p>
      In this guide, we’ll delve deep into the basics of search operators and search commands,
      helping you understand how to wield these powerful tools effectively and move on to advanced
      commands and operators.
    </p>
  </>
);

TwoParagraphs.storyName = 'two paragraphs';

export const H1 = () => <h1 style={{ fontSize: 48 }}>Advertising</h1>;

H1.storyName = 'h1';

export const H2 = () => <h2 style={{ fontSize: 42 }}>Join our newsletter</h2>;

H2.storyName = 'h2';

export const H3 = () => <h3 style={{ fontSize: 32 }}>heading</h3>;

H3.storyName = 'h3';

export const H4 = () => <h4 style={{ fontSize: 26 }}>heading</h4>;

H4.storyName = 'h4';

export const H5 = () => (
  <h5 style={{ fontSize: 22 }}>
    The Ultimate Guide to Google Search Operators and Google Search Commands
  </h5>
);

H5.storyName = 'h5';

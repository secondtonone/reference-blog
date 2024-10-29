import AuthorBio from '~/components/organisms/author-bio';

import authors from '~/__fixtures__/authors';

export default {
  title: 'Organisms/author bio',
};

export const Default = () => <AuthorBio {...authors[0]} />;

Default.storyName = 'default';

export const OtherUser = () => <AuthorBio {...authors[1]} />;

OtherUser.storyName = 'other user';

export const InBlock = () => (
  <div style={{ width: '600px' }}>
    <AuthorBio {...authors[0]} inBlock />
  </div>
);

InBlock.storyName = 'in block';

export const WithCircle = () => <AuthorBio {...authors[1]} clipping="circle" />;

WithCircle.storyName = 'with circle';

export const InBlockWithCircle = () => (
  <div style={{ width: '600px' }}>
    <AuthorBio {...authors[0]} inBlock clipping="circle" />
  </div>
);

InBlockWithCircle.storyName = 'in block with circle';

export const WithBlob = () => <AuthorBio {...authors[1]} clipping="blob" />;

WithBlob.storyName = 'with blob';

export const InBlockWithBlob = () => (
  <div style={{ width: '600px' }}>
    <AuthorBio {...authors[0]} inBlock clipping="blob" />
  </div>
);

InBlockWithBlob.storyName = 'in block with blob';

export const WithFlower = () => <AuthorBio {...authors[1]} clipping="flower" />;

WithFlower.storyName = 'with flower';

export const InBlockWithFlower = () => (
  <div style={{ width: '600px' }}>
    <AuthorBio {...authors[0]} inBlock clipping="flower" />
  </div>
);

InBlockWithFlower.storyName = 'in block with flower';

export const WithRadiation = () => <AuthorBio {...authors[1]} clipping="radiation" />;

WithRadiation.storyName = 'with radiation';

export const InBlockWithRadiation = () => (
  <div style={{ width: '600px' }}>
    <AuthorBio {...authors[0]} inBlock clipping="radiation" />
  </div>
);

InBlockWithRadiation.storyName = 'in block with radiation';

export const WithClockwise = () => <AuthorBio {...authors[1]} clipping="clockwise" />;

WithClockwise.storyName = 'with clockwise';

export const InBlockWithClockwise = () => (
  <div style={{ width: '600px' }}>
    <AuthorBio {...authors[0]} inBlock clipping="clockwise" />
  </div>
);

InBlockWithClockwise.storyName = 'in block with clockwise';

export const WithRise = () => <AuthorBio {...authors[1]} clipping="rise" />;

WithRise.storyName = 'with rise';

export const InBlockWithRise = () => (
  <div style={{ width: '600px' }}>
    <AuthorBio {...authors[0]} inBlock clipping="rise" />
  </div>
);

InBlockWithRise.storyName = 'in block with rise';

import YoutubePlaceholder, { YoutubePlaceholderProps } from '~/components/molecules/youtube-placeholder';

const Youtube: React.FC<YoutubePlaceholderProps> = ({ src }) => (
  <YoutubePlaceholder src={src} />
);

export default Youtube;

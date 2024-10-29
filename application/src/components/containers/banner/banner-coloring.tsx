import { BannerColors } from '~/styles/palette';

const colors: Array<keyof BannerColors> = ['greenGrassIllust', 'orangeIllust', 'orangePaleIllust', 'purpleIllust', 'yellowIllust'];

const randomColor = () => colors[Math.floor(Math.random() * colors.length)];

interface Props {
  children: (color: ReturnType<typeof randomColor>) => React.ReactNode
}

const BannerColoring: React.FC<Props> = ({
  children
}) => (
  <>
    {children(randomColor())}
  </>
);

export default BannerColoring;

import clippings, { Clippings } from './clippings';
import { imageResize } from '~/utils';

export interface PhotoAvatarProps {
  scale?: number;
  photo: string;
  photoMask?: Clippings;
}

const DIMENSION = 150;
const SIZE = DIMENSION * 2;

const PhotoAvatar: React.FC<PhotoAvatarProps> = ({
  scale = 1,
  photo,
  photoMask = 'star',
  ...props
}) => (
  <svg
    role="img"
    data-test="photo-avatar"
    viewBox={`0 0 ${DIMENSION} ${DIMENSION}`}
    width={DIMENSION * scale}
    height={DIMENSION * scale}
    {...props}
  >
    <title>Author Photo</title>
    <defs>
      <clipPath id={photoMask} clipPathUnits="userSpaceOnUse">
        {clippings[photoMask]}
      </clipPath>
    </defs>
    <image
      xlinkHref={imageResize({
        src: photo,
        height: SIZE * scale,
        width: SIZE * scale,
        replaceText: ''
      }).src}
      x={0}
      y={0}
      width={DIMENSION}
      height={DIMENSION}
      clipPath={`url(#${photoMask})`}
    />
  </svg>
);

export default PhotoAvatar;

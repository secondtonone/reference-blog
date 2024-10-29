import { attributesToProps } from 'html-react-parser';

const CtaImage = (props) => {
  const {
    image = '',
    link = '',
    text = ''
  } = attributesToProps(props);

  if (!link) {
    return <span className="no-link" />;
  }

  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer nofollow"
    >
      {image && (
        <img src={image} alt="" />
      )}
      {text && (
        <u>
          <strong>
            {text}
          </strong>
        </u>
      )}
    </a>
  );
};

export default CtaImage;

import styled from 'styled-components';
import { useState } from 'react';
import { TagControl } from '~/components/atoms';
import SvgIcon from '~/components/containers/svg-icon';
import FontWeights from '~/styles/scheme/font-weights';
import { BaseCategory } from '~/view-model';

interface Props {
  links: BaseCategory[],
  isPhone?: boolean,
  clear?: boolean,
  step?: boolean,
  slug?: string
}

const CategoriesList: React.FC<Props> = ({
  links,
  isPhone,
  clear,
  step,
  slug
}) => {
  const [short, setShort] = useState(isPhone);

  return (
    <>
      {links.map(link => (
        <TagControl
          key={`category-tag-${link.slug}`}
          href={`/blog/category/${link.lang === 'en' ? `${slug}/` : ''}${link.slug}`}
          clear={clear}
          step={step}
        >
          {link.name}
        </TagControl>
      )).slice(0, short ? 2 : Infinity)}
      {short && (
        <TagControlStyled onClick={() => setShort(!short)}>
          <SvgIcon code="arrow-thin" size={[12, 12]} />
        </TagControlStyled>
      )}
    </>
  );
};

const TagControlStyled = styled(TagControl)`
  display: inline-block;
  width: 46px;
  height: 29px;
  font-weight: ${FontWeights.normal};
`;

export default CategoriesList;

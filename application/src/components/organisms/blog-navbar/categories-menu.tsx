import { FC, useEffect, useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import {
  TextContent,
} from '~/components/atoms';

import {
  BreakpointViewModel,
  CategoriesViewModel
} from '~/view-model';

import { getScheme } from '~/styles/scheme';
import getDeviceType from '~/utils/get-device-type';

const theme = getScheme();
const url = '/blog/category';

const CustomDropdown = dynamic(
  import('~/components/molecules/custom-dropdown'),
  { ssr: true }
);

interface Props {
  categories: CategoriesViewModel
  leveled?: boolean
  onClick?: (
    name: string,
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => void;
}

const CategoriesMenu: FC<Props> = ({ categories = [], onClick, leveled }) => {
  const [viewport, setViewport] = useState<BreakpointViewModel>();

  useEffect(() => {
    setViewport(getDeviceType());
  }, []);

  return (
    <>
      {categories?.map(category => {
        const categoryLink = (
          <Link href={`${url}/${category.slug}/`}>
            <a
              target="_blank"
              role="link"
              data-test={`menu-link-${category.slug}`}
              onClick={(e) => typeof onClick === 'function' && onClick(category.name, e)}
            >
              <TextContent
                accentFont
                fontWeight={{ _: 'accent' }}
                fontSize={{ _: 3, sm: 11, md: 3 }}
              >
                {category.name}
              </TextContent>
            </a>
          </Link>
        );

        return (
          <li key={`category-dropdown-${category.lang}-${category.slug}-${category.id}`}>
            {category.children?.length > 0
              ? (
                <CustomDropdown
                  hMax="550px"
                  p="40px 64px 36px"
                  offset={[-64, 0]}
                  interaction={viewport?.isDesktop ? 'hover' : 'none'}
                  background={(isLight) => (isLight ? theme.background : theme.newGrey)}
                  color={(isLight) => (isLight ? theme.textColor : theme.white)}
                  trigger={categoryLink}
                  items={category.children
                    ? (
                      category.children.map((item) => (
                        <a
                          key={category.slug.toString()}
                          href={`${url}${leveled ? `/${category.slug}` : ''}/${item.slug}/`}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => typeof onClick === 'function' && onClick(item.name, e)}
                        >
                          <TextContent
                            fontWeight={600}
                            fontSize={{ _: 5 }}
                            py={3}
                            currentColor
                          >
                            {item.name}
                          </TextContent>
                        </a>
                      ))) : null}
                />
              ) : (
                <Link href={`${url}/${category.slug}`}>
                  <a
                    target="_blank"
                    role="link"
                    data-test={`menu-link-${category.slug}`}
                    onClick={(e) => typeof onClick === 'function' && onClick(category.name, e)}
                  >
                    <TextContent
                      accentFont
                      fontWeight={{ _: 'accent' }}
                      fontSize={{ _: 3, sm: 11, md: 3 }}
                    >
                      {category.name}
                    </TextContent>
                  </a>
                </Link>
              )}
          </li>
        );
      })}
    </>
  );
};

export default CategoriesMenu;

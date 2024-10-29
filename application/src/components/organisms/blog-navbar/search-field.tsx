import { FC, useCallback, useState } from 'react';
import { useRouter } from 'next/router';

import InputField, { Input } from '~/components/atoms/input-field';

import SvgIcon from '~/components/containers/svg-icon';

interface Props {
  disabled?: boolean,
  onSearch?: () => void
}

const SearchField: FC<Props> = ({ disabled, onSearch }) => {
  const router = useRouter();
  const [searchText, setSearchText] = useState<string>();

  const onSubmitHandle = useCallback(async (e) => {
    e.preventDefault();

    if (searchText) {
      router.push({
        pathname: '/blog/search',
        query: {
          text: searchText
        }
      });

      onSearch();
    }
  }, [searchText]);

  return (
    <form data-test="mobile-search-form" onSubmit={onSubmitHandle}>
      <InputField
        width="100%"
        placeholder="Search"
        after={(
          <Input.Addon onClick={onSubmitHandle}>
            <SvgIcon code="search" />
          </Input.Addon>
        )}
        error=""
        state="normal"
        value={searchText}
        onChange={(value) => setSearchText(value)}
        disabled={disabled}
      />
    </form>
  );
};

export default SearchField;

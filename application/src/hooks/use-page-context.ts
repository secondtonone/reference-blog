import { useContext } from 'react';
import PageContext from '~/contexts/page-context';

const usePageContext = () => useContext(PageContext);

export default usePageContext;

import { useContext } from 'react';
import SubdomainContext from '~/contexts/subdomain-context';

const useSubdomainContext = () => useContext(SubdomainContext);

export default useSubdomainContext;

import styled from 'styled-components';
import { useEffect, useState } from 'react';
import SvgIcon from '~/components/containers/svg-icon';
import { getCanonicalSubdomain } from '~/utils';

const LanguageSelector: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  const [lang, setLang] = useState('');

  useEffect(() => {
    if ('location' in window) {
      const canonicalSubdomain = getCanonicalSubdomain(window.location.hostname);
      const validDomain = ['fr', 'es', 'de', 'it', 'pt'].includes(canonicalSubdomain);

      const subdomain = validDomain ? canonicalSubdomain : 'www';

      if (!validDomain && !window.location.host.includes(`${canonicalSubdomain}.`)
        && ['example.com', 'rc.example.net'].some(hostUrl => window.location.host.includes(hostUrl))) {
        window.location.href = 'https://www.example.com/blog/';
      }

      setLang(subdomain === 'www' ? 'en' : subdomain);
    }
  }, []);

  return (
    <ChangeLang onClick={onClick} data-test="change-lang-open">
      {lang}
      {lang && (
        <LangIcon code="up" size={[20, 12]} />
      )}
    </ChangeLang>
  );
};

const ChangeLang = styled.div`
  margin-top: 3px;
  color: ${({ theme }) => (theme.secondary4)};
  text-transform: uppercase;
  cursor: pointer;
  margin-right: -4px;
`;

const LangIcon = styled(SvgIcon)`
  padding-bottom: 5px;
  margin-left: 2px;
  transform: rotate(180deg);
`;

export default LanguageSelector;

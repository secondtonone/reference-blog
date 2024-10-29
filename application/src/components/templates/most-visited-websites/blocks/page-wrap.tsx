import styled from 'styled-components';
import { useEffect, useState } from 'react';

const PageWrap: React.FC = ({ children }) => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <PageWrapStyled visible={mounted}>
      {children}
    </PageWrapStyled>
  );
};

const PageWrapStyled = styled.div<{ visible: boolean }>`
  overflow: hidden;

  a:not(.ta-widget-button):not(.me-widget-button) {
    color: ${({ theme }) => (theme.orangeBrand)};
  }

  .tableContainer p[data-ui-name="Text"] {
    color: ${({ theme }) => (theme.isDark ? '#898D9A' : '')} !important;;
  }

  table {
    tr,
    th {
      background: ${({ theme }) => (theme.isDark ? 'inherit' : '')} !important;
    }
  }

  .chartWrap {
    g text {
      fill: ${({ theme }) => (theme.isDark ? '#fff' : '')} !important;
    }
  }

  .industry-tag {
    color: ${({ theme }) => (theme.isDark ? '#898D9A' : '')} !important;
  }
`;

export default PageWrap;

import Link from 'next/link';

import SvgIcon from '~/components/containers/svg-icon';

const User: React.FC = () => (
  <Link href="https://blogadmin-prod.k1.example.net/">
    <a data-test="profile-page-link" target="_blank">
      <SvgIcon code="user" />
    </a>
  </Link>
);

export default User;

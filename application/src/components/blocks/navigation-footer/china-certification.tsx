import { LinkText } from '~/components/atoms';

const ChinaCertification = () => (
  <span data-test="example-china-cert">
    上海勤凯信息科技有限公司网站
    {' '}
    <LinkText data-test="example-china-cert-link" href="http://www.beian.miit.gov.cn" target="_blank" rel="noreferrer" currentColor undecorated>沪ICP备09000675号-8</LinkText>
  </span>
);

export default ChinaCertification;

import NavigationFooter from './navigation-footer';
import FooterLinks, { FooterLinksProps } from './footer-links';

const FooterWithLinks: React.FC<FooterLinksProps> = ({
  children,
  locale = 'en'
}) => (
  <NavigationFooter>
    <FooterLinks locale={locale} />
    {children}
  </NavigationFooter>
);

export default FooterWithLinks;

/* eslint-disable camelcase */
import dynamic from 'next/dynamic';
import { CreateCampaignProps } from './create-campaign';

import { FreeToolProps } from './free-tool';
import FreeToolsName from './free-tool/free-tools-name';
import { IllustGroupTokens } from '~/styles/palette';
import { EpisodeProps } from './episode';

const CreateCampaign = dynamic(
  import('./create-campaign'),
  { ssr: false }
);

const BlogSurvey = dynamic(
  import('./blog-survey'),
  { ssr: false }
);

const Youtube = dynamic(
  import('./youtube'),
  { ssr: false }
);

// const TableCells = dynamic(
//   import('./table-cells'),
//   { ssr: false }
// );
//
// const TableTabs = dynamic(
//   import('./table-tabs'),
//   { ssr: false }
// );

const CtaImage = dynamic(
  import('./cta-image'),
  { ssr: false }
);

const Episode = dynamic(
  import('./episode'),
  { ssr: false }
);

const EbooksPromo = dynamic(
  import('./ebooks-promo'),
  { ssr: false }
);

const FreeTool = dynamic(
  import('./free-tool'),
  { ssr: false }
);

const SmmCalendar = dynamic(
  import('./smm-calendar'),
  { ssr: false }
);

const MigrationChecklist = dynamic(
  import('./migration-checklist'),
  { ssr: true }
);

const replaceShortcodes = (
  [...args]: string[],
  code: (props: Record<string, unknown>) => React.ReactNode
) => args
  .reduce((acc, val) => {
    acc[val] = code;

    return acc;
  }, {});

const hiddenWidgets = replaceShortcodes(
  [
    'flourish-embed-chart',
    'exmpl-podcast-list',
    'traffic-jet-calc-widget',
    'profile-mini',
    'community-related',
    'button'
  ],
  () => <i />
);

const migrationChecklistWidgets = replaceShortcodes(
  [
    'migration-checklist-widget',
    'migration-checklist-widget-es',
    'migration-checklist-widget-de',
    'migration-checklist-widget-fr',
    'migration-checklist-widget-it',
    'migration-checklist-widget-pt',
  ],
  () => <MigrationChecklist />
);

const siteAuditWidgets = replaceShortcodes(
  [
    'free-tools-site-audit',
    'free-tools-site-audit-en',
    'free-tools-site-audit-es',
    'free-tools-site-audit-de',
    'free-tools-site-audit-fr',
    'free-tools-site-audit-it',
    'free-tools-site-audit-pt',
  ],
  ({
    trial,
    variant
  }: Pick<FreeToolProps, 'trial' | 'variant'>) => (
    <FreeTool
      name={FreeToolsName.SITE_AUDIT}
      trial={trial}
      variant={variant}
    />
  )
);

const Widgets = {
  ...hiddenWidgets,
  ...migrationChecklistWidgets,
  ...siteAuditWidgets,
  'create-campaign': ({
    button_text2,
    button_text = button_text2,
    destination_url2,
    destination_url = destination_url2,
    header,
    text,
    placeholder,
    image,
    accent,
    background,
    tools = 'siteaudit',
    button_color = 'purpleBrand',
    code,
    shiftY,
    redirect
  }: {
    button_text: string
    destination_url: string
    button_text2: string
    destination_url2: string
    header: string
    text: string,
    button_color: keyof IllustGroupTokens | 'purpleBrand',
    code: 'short' | 'default',
    redirect: string,
    shiftY?: number
  } & CreateCampaignProps) => (
    <CreateCampaign
      tools={tools}
      heading={header}
      link={destination_url}
      button={`${button_text || 'Try now'} →`}
      buttonColor={button_color}
      description={text}
      placeholder={placeholder}
      image={image}
      accent={accent}
      background={background}
      code={code}
      shiftY={shiftY}
      redirected={Boolean(redirect)}
    />
  ),
  'domain-authority-checker': ({
    trial,
    domain,
    variant,
    link,
  }: Pick<FreeToolProps, 'trial' | 'variant' | 'link'> & { domain: string }) => (
    <FreeTool
      name={FreeToolsName.DOMAIN_CHECKER}
      trial={trial}
      data-domain={domain}
      variant={variant}
      link={link}
    />
  ),
  'ebooks-promo': ({ slug }: { slug: string }) => (<EbooksPromo slug={slug} />),
  episode: ({ label, id, button }: EpisodeProps) => (
    <Episode
      label={label}
      id={id}
      button={button}
    />
  ),
  // 'table-cells': (props) => (
  //   <TableCells {...props} />
  // ),
  // 'table-tabs': (props) => (
  //   <TableTabs {...props} />
  // ),
  'blog-survey': (props) => (
    <BlogSurvey {...props} />
  ),
  'cta-image': (props) => (
    <CtaImage {...props} />
  ),
  'smm-calendar-new': () => (
    <SmmCalendar />
  ),
  youtube: (props) => (
    <Youtube {...props} />
  )
};

/* eslint-enable camelcase */

export default Widgets;

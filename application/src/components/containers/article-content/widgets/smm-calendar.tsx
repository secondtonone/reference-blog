import Head from 'next/head';
import CalendarTable from '@flame/calendar-table';
import events from '~/externals/events.json';

const SmmCalendar: React.FC = () => (
  <>
    <Head>
      <link rel="stylesheet" href="https://static.example.com/blog-next-static/widgets/smm-calendar-style.css" />
      <style>
        {`
          #status-form {
            display: none;
          }

          html body .google-updates-calendar h3 {
            margin-top: 0 !important;
            padding-top: 4rem !important;
          }
        `}
      </style>
    </Head>
    {/* @ts-ignore */}
    <CalendarTable fields={events} />
  </>
);

export default SmmCalendar;

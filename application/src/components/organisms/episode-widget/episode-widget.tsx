import { useEffect, useState } from 'react';
import getConfig from 'next/config';
import EpisodeCard, { EpisodeCardProps } from '~/components/blocks/episode-card';
import { BoxAdaptive } from '~/components/atoms';
import { useApi } from '~/hooks';

export interface EpisodeWidgetProps extends Pick<EpisodeCardProps, 'onClick'> {
  id: string
  label?: string
  button?: string
}

const EpisodeWidget:React.FC<EpisodeWidgetProps> = ({
  id, label, button, onClick
}) => {
  const { publicRuntimeConfig } = getConfig() || { publicRuntimeConfig: { apiPublic: '' } };
  const { apiPublic } = publicRuntimeConfig;

  const api = useApi(apiPublic);

  const [episode, setEpisode] = useState<{
    title: string
    link: string
  }>({
    title: '',
    link: ''
  });

  const [isError, setError] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      try {
        const { data: articles } = await api.pagesList(`?id[]=${id}`);
        const { title, url } = articles[0];

        setEpisode({
          title,
          link: `https://www.example.com/${url}`
        });
      } catch {
        setError(true);
      }
    })();
  }, []);

  if (isError) {
    return null;
  }

  if (!episode.title) {
    return <BoxAdaptive height={140} />;
  }

  return (
    <EpisodeCard
      title={episode.title}
      label={label}
      button={button}
      link={episode.link}
      onClick={onClick}
      bordered
    />
  );
};

export default EpisodeWidget;

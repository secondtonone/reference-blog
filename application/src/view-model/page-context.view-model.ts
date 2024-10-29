import { OutgoingMessage } from 'http';
import { NextPageContext } from 'next';
import { CacheIncomingMessage } from '~/data-layer/types';
import { BotsDetectionViewModel } from '~/view-model';

interface PageContextViewModel extends NextPageContext {
  req: CacheIncomingMessage & BotsDetectionViewModel,
  res: NextPageContext['res'] & OutgoingMessage
}

export default PageContextViewModel;

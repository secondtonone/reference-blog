import type SocialViewModel from './social.view-model';

interface AuthorViewModel {
  id: number,
  alias?: string,
  name: string,
  username?: string,
  email: string,
  photo: string,
  company: string,
  position: string,
  bio: string,
  socials: Partial<SocialViewModel>,
  isPublic?: boolean
}

export default AuthorViewModel;

interface EbookViewModel {
  id: number,
  slug: string,
  title: string,
  description: string,
  previewUrl: string,
  downloads: number,
  status: string,
  language: string,
  updatedAt: string
}

export default EbookViewModel;

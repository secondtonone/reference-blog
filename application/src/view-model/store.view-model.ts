interface StoreViewModel {
  store: Partial<{
    themeStore: {
      isDark: boolean,
      toggleDark: () => void
    },
    i18nStore: {
      lang: string,
      setLang: () => void
    }
  }>
}

export default StoreViewModel;

enum BreakPointName {
  'isPhone',
  'isTablet',
  'isDesktop'
}

type BreakpointViewModel = {
  [key in keyof typeof BreakPointName]: boolean
}

export default BreakpointViewModel;

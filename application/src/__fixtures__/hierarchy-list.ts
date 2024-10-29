const hierarchyList = {
  0: {
    text: 'Wix vs. WordPress: Ease of Use ',
    child: 1,
    parent: null,
    next: 6,
  },
  1: {
    text: 'Ease of Use/Functionality',
    child: null,
    parent: 0,
    next: 2,
  },
  2: {
    text: 'Drag and Drop Page Builder',
    child: null,
    parent: 0,
    next: 3,
  },
  3: {
    text: 'Themes',
    child: null,
    parent: 0,
    next: 4,
  },
  4: {
    text: 'Plugins',
    child: null,
    parent: 0,
    next: 5,
  },
  5: {
    text: 'Open vs. Closed Source Systems',
    child: null,
    parent: 0,
    next: null,
  },
  6: {
    text: 'Wix vs. WordPress: Which Platform Allows for Better Blogging?',
    child: 7,
    parent: null,
    next: 9,
  },
  7: {
    text: 'Is Wix Good for Blogging?',
    child: null,
    parent: 6,
    next: 8,
  },
  8: {
    text: 'Is WordPress Good for Blogging?',
    child: null,
    parent: 6,
    next: null,
  },
  9: {
    text: 'Wix vs. WordPress: Which Platform Is Better for Ecommerce?',
    child: null,
    parent: null,
    next: 10,
  },
  10: {
    text: 'What is the Cost of Wix vs. WordPress?',
    child: null,
    parent: null,
    next: 11,
  },
  11: {
    text: 'Fix Website Errors with the example Site Audit Tool',
    child: null,
    parent: null,
    next: 12,
  },
  12: {
    text: 'Wix vs. WordPress: The Choice Is Yours',
    child: null,
    parent: null,
    next: null,
  }
} as const;

export default hierarchyList;

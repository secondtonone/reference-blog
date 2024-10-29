const subscriptionEvents = [
  {
    name: 'form-subscribe-click',
    category: 'Blog',
    action: 'form-subscribe',
    label: 'click'
  },
  {
    name: 'form-subscribe-show',
    category: 'Blog',
    action: 'form-subscribe',
    label: 'show'
  }
] as const;

export default subscriptionEvents;

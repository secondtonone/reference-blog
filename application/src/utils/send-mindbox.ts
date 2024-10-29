const sendMindbox = (email, category, locale) => {
  if ('mindbox' in window) {
    // @ts-ignore
    mindbox('async', {
      operation: 'CodeContentDeliverySubscription',
      data: {
        customer: {
          customFields: {
            locale,
            SubscriptionSource: ['Blog'],
          },
          email,
          subscriptions: [
            {
              pointOfContact: 'email',
              topic: category || 'bestoftheblog',
              valueByDefault: 'false',
              isSubscribed: 'true',
            },
          ],
        },
      },
    });

    return;
  }

  // eslint-disable-next-line no-console
  console.log('no mindbox');
};

export default sendMindbox;

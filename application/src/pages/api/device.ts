import getDeviceType from '~/utils/get-device-type';

export default (req, res) => {
  const {
    isPhone, isTablet, isDesktop
  } = getDeviceType(req);

  if (!req) {
    res.statusCode = 400;
    res.json({ status: 'error' });
  }

  res.statusCode = 200;

  res.json({
    status: 'ok',
    breakpoint: {
      isPhone,
      isTablet,
      isDesktop
    }
  });
};

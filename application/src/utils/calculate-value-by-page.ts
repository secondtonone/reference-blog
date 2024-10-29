const calculateValueByPage = ({
  currentPage,
  upperLimit,
  lowerLimit,
  borderPage
}: Record<string, number>) => (currentPage === 1
  ? 0
  : (borderPage < currentPage
    ? (currentPage - borderPage) * upperLimit
    : lowerLimit));

export default calculateValueByPage;

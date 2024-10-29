type LimitParams = {
  minW?: number,
  maxW?: number,
};

type DimensionsResult = {
  height: number,
  width: number
};

const getDimensions = ({
  height,
  width,
  minW = 0,
  maxW = width
} : DimensionsResult & LimitParams): DimensionsResult => {
  const newWidth = width > minW ? maxW : (width < minW ? width : minW);
  const newHeight = Math.round(height * (width / newWidth));
  return {
    width: newWidth,
    height: newHeight,
  };
};

export default getDimensions;

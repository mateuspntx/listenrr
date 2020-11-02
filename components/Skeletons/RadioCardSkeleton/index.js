import { ShimmerEffect } from '../ShimmerEffect';
import { Cover, Label, RadioCardDiv, Title } from './styles';

const RadioCardSkeleton = () => {
  return (
    <RadioCardDiv>
      <Cover css={ShimmerEffect} />
      <Title css={ShimmerEffect} />
      {/* <Label css={ShimmerEffect} /> */}
    </RadioCardDiv>
  );
};

export default RadioCardSkeleton;

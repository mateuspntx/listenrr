import { RadioCardDiv, Cover, Title, Label } from './styles';
import { ShimmerEffect } from '../ShimmerEffect';

const RadioCardSkeleton = () => {
  return (
    <RadioCardDiv>
      <Cover css={ShimmerEffect} />
      <Title css={ShimmerEffect} />
      <Label css={ShimmerEffect} />
    </RadioCardDiv>
  )
}

export default RadioCardSkeleton;
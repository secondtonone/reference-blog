import styled from 'styled-components';
import ButtonIcon from '../button-icon';

import { getScheme } from '~/styles/scheme';
import { CustomButtonProps } from '~/components/atoms/custom-button';

interface Props extends CustomButtonProps {
  active?: boolean;
}

const lightTheme = getScheme();

const ButtonUp: React.FC<Props> = ({ active = false }) => (
  <UpStyled>
    <ButtonIcon aria-label="To Top" data-test="button-up" code="up" active={active} sizes={[16, 16]} />
  </UpStyled>
);

const UpStyled = styled.span`
  background: ${({ theme }) => (theme.isLight ? theme.white : lightTheme.opposed)};
  display: flex;
  border-radius: 6px;
`;

export default ButtonUp;

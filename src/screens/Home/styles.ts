import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    padding: 24px;
`;

export const Content = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
`;

export const Logo = styled.Image`
    width: 82px;
    height: 37px;
`;

export const Profile = styled.Image`
    border-radius: 50;
    width: 40px;
    height: 40px;
`;

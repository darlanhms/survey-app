import { TextInputProps } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export const HomeContainer = styled.View`
  padding: 16px;
`;

export const ContainerSection = styled.View`
  margin-bottom: 24px;
`;

export const TitleSection = styled.Text`
  font-size: 20px;
  color: ${props => props.theme.colors.primary};
  font-family: ${props => props.theme.fonts.defaultBold};
  margin-bottom: 10px;
  margin-left: 3px;
`;

export const TokenInput = styled.TextInput.attrs<unknown, TextInputProps>({
  placeholderTextColor: 'rgb(207, 207, 207)',
})`
  background-color: white;
  padding-left: 16px;
  height: 48px;
  background: #ffffff;
  font-family: ${props => props.theme.fonts.defaultBold};
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  font-size: 16px;
  line-height: 19px;
`;

export const ButtonBuild = styled.TouchableOpacity`
  background-color: ${props => props.theme.colors.primary};
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  align-items: center;
  flex-direction: row;
  padding: 16px;
  margin-bottom: 16px;
`;

export const ButonText = styled.Text`
  color: white;
  font-family: ${props => props.theme.fonts.defaultBold};
  font-size: 17px;
`;

export const ButtonIcon = styled(Icon)`
  margin-right: 12px;
`;

export const PopularCard = styled.TouchableOpacity`
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.05);
  background-color: white;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
`;

export const PopularTitle = styled.Text`
  font-family: ${props => props.theme.fonts.defaultBold};
  font-size: 17px;
  color: black;
`;

export const WriterStarsContainer = styled.View`
  flex-direction: row;
  margin-top: 7px;
  justify-content: center;
`;

export const Writer = styled.Text`
  color: #8b8b8b;
  font-size: 14px;
  font-family: ${props => props.theme.fonts.defaultBold};
  width: 60%;
`;

export const StarsContainer = styled.View`
  width: 40%;
  flex-direction: row;
  overflow: hidden;
`;

export const Star = styled(Icon)`
  margin: 0px 5px;
`;

export const TextAnswers = styled.Text`
  font-family: ${props => props.theme.fonts.defaultBold};
  font-size: 14px;
  color: black;
`;

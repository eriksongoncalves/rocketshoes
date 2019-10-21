import styled from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialIcons';

import colors from '../../styles/colors';

export const Container = styled.View`
    flex: 1;
    marginHorizontal: 7;
    marginVertical: 7;
    paddingHorizontal: 5;
    paddingVertical: 5;
    background: #fff;
    width: 200px;
    border-radius: 4px;
`;

export const LikeButton = styled.TouchableOpacity`
    position: absolute;
    top: 5;
    right: 5;
    z-index: 1;
`

export const Like = styled(Icon).attrs(props => ({
    name: props.liked ? "favorite" : "favorite-border",
    color: props.liked ? "#e93a2b" : null,
    size: 30
}))`
`;

export const Info = styled.View`
`

export const Title = styled.Text`
    fontSize: 15;
`

export const Price = styled.Text`
    fontSize: 18;
    fontWeight: bold;
    paddingVertical: 7;
`

export const ButtonAddCart = styled.TouchableOpacity`
    background: ${colors.primary};
    flexDirection: row;
    alignItems: center;
    border-radius: 4px;
`

export const Amount = styled.View`
    flexDirection: row;
    alignItems: center;
    color: #fff;
    background: rgba(0,0,0,.1);
    paddingVertical: 5;
    paddingHorizontal: 7;
    
`

export const AmountText = styled.Text`
    color: #fff;
    marginLeft: 5
`

export const ButtonText = styled.Text`
    color: #fff;
    text-align: center;
    flex: 1;
    font-size: 16
`


import styled from 'styled-components';
import colors from '../../styles/colors';

export const CartProducts = styled.View`
    background: ${colors.dark};
    flex: 1;
    padding: 10px
`;

export const Product = styled.View`
    border-radius: 4px;
    background: #fff;
    padding: 10px;
    marginBottom: 10px;
`

export const ProductDetail = styled.View`
    flexDirection: row;
    alignItems: center;
    borderBottomWidth: 2px;
    borderBottomColor: #eee;
    
`
export const Info = styled.View`
    flex: 1;
    marginLeft: 10px;

`

export const Title = styled.Text`
    fontWeight: bold;
    marginBottom: 10px
`

export const Price = styled.Text`
    fontWeight: bold;
    fontSize: 16px
`

export const Delete = styled.TouchableOpacity`
    position: absolute;
    top: 0;
    right: 0
`

export const ProductAmount = styled.View`
    flexDirection: row;
    alignItems: center;
    paddingTop: 10px
`

export const AmountButton = styled.TouchableOpacity`
    
`

export const AmountText = styled.Text`
    paddingVertical: 10px;
    paddingHorizontal: 15px;
    marginHorizontal: 5px;
    borderWidth: 1px;
    borderColor: #dfdfdf;
    border-radius: 5px;
    font-size: 16px;
    
`
export const SubTotal = styled.Text`
    flex: 1;
    textAlign: right;
    fontWeight: bold;
    font-size: 16px;
`
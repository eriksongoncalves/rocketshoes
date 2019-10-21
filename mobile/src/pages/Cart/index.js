import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as cartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/format';

import {
    CartProducts,
    Product,
    ProductDetail,
    Info,
    Title,
    Price,
    Delete,
    ProductAmount,
    AmountButton,
    AmountText,
    SubTotal
} from './styles';
import colors from '../../styles/colors';

function Cart({ cart, removeCart }) {
    return (
        <CartProducts>
            {
                cart.map(product => (
                    <Product key={product.id}>
                        <ProductDetail>
                            <Image source={{ uri: product.image }} style={{ width: 140, height: 150 }} />
                            <Info>
                                <Title numberOfLines={2}>{product.title}</Title>
                                <Price>{formatPrice(product.price)}</Price>
                            </Info>
                            <Delete onPress={() => removeCart(product.id)}>
                                <Icon name="delete-forever" size={24} color={colors.primary} />
                            </Delete>
                        </ProductDetail>
                        <ProductAmount>
                            <AmountButton onPress={() => { }}>
                                <Icon name="remove-circle-outline" size={24} color={colors.primary} />
                            </AmountButton>
                            <AmountText>{product.amount}</AmountText>
                            <AmountButton onPress={() => { }}>
                                <Icon name="add-circle-outline" size={24} color={colors.primary} />
                            </AmountButton>
                            <SubTotal>{formatPrice(product.price * product.amount)}</SubTotal>
                        </ProductAmount>

                    </Product>
                ))
            }
        </CartProducts>
    )
}

const mapStateToProps = state => ({
    cart: state.cart
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(cartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

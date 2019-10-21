import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
    Container,
    LikeButton,
    Like,
    Info,
    Title,
    Price,
    ButtonAddCart,
    Amount,
    AmountText,
    ButtonText
} from './styles';
import { formatPrice } from "../../util/format";

import * as cartActions from '../../store/modules/cart/actions';
import * as favoritesActions from '../../store/modules/favorites/actions';

function ProductItem({ amount, product, addCart, toogleFavorite, favorites }) {
    function hasLike(product) {
        return favorites.find(id => id === product) > 0;
    }

    return (
        <Container>
            <LikeButton onPress={() => toogleFavorite(product.id)}>
                <Like liked={hasLike(product.id)} />
            </LikeButton>
            <Image source={{ uri: product.image }} style={{ width: 160, height: 170 }} />
            <Info>
                <Title numberOfLines={2}>{product.title}</Title>
                <Price>{formatPrice(product.price)}</Price>
            </Info>
            <ButtonAddCart onPress={() => addCart(product)}>
                <Amount>
                    <Icon name="shopping-cart" color="#fff" size={24} />
                    <AmountText>{amount[product.id] || 0}</AmountText>
                </Amount>
                <ButtonText>Adicionar</ButtonText>
            </ButtonAddCart>
        </Container>
    )
}

const mapStateToProps = state => ({
    amount: state.cart.reduce((amount, product) => {
        amount[product.id] = product.amount;
        return amount;
    }, {}),
    favorites: state.favorites
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({ ...cartActions, ...favoritesActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
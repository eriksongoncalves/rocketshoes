import React from 'react';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableWithoutFeedback } from 'react-native';
import { Container, Logo, CartContainer, ItemCount, Wrapper } from './styles';

const Header = ({ navigation, countItems }) => (
    <Wrapper>
        <Container>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Home')}>
                <Logo />
            </TouchableWithoutFeedback>
            <CartContainer onPress={() => navigation.navigate('Cart')}>
                <Icon name="shopping-basket" color="#fff" size={24} />
                <ItemCount>{countItems}</ItemCount>
            </CartContainer>
        </Container>
    </Wrapper>
);

const mapStateToProps = state => ({
    countItems: state.cart.length
});

export default connect(mapStateToProps)(Header);

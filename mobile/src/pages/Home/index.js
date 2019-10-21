import React, { useState, useEffect } from 'react';
import {
    FlatList,
    ActivityIndicator
} from 'react-native';

import ProductItem from '../../components/ProductItem';
import { Container } from './styles';
import api from '../../services/api';

export default function Home() {
    const [products, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadProducts() {
            try {
                const response = await api.get('/products');
                setProduct(response.data);
            }
            catch (e) {
                console.tron.log('Erro ao carregar os produtos', e);
            }
            finally {
                setLoading(false);
            }
        }

        loadProducts();

    }, []);

    return (
        <Container>
            {
                loading
                    ? <ActivityIndicator size="large" color="#fff" />
                    : <FlatList
                        data={products}
                        keyExtractor={item => String(item.id)}
                        renderItem={({ item }) => <ProductItem product={item} />}
                        numColumns={2}
                    />
            }
        </Container>
    )
}
import React from 'react';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
    return (
        <Container>
            <ProductTable>
                <thead>
                    <tr>
                        <th></th>
                        <th>PRODUTO</th>
                        <th>QTD</th>
                        <th>SUBTOTAL</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src="https://static.netshoes.com.br/produtos/tenis-puma-wired/74/D14-5566-174/D14-5566-174_detalhe1.jpg" alt="" /></td>
                        <td>
                            <strong>Tênis</strong>
                            <span>R$129,90</span>
                        </td>
                        <td>
                            <div>
                                <button>
                                    <MdRemoveCircleOutline size={20} color="#7159c1" />
                                </button>
                                <input type="number" readOnly value={2} />
                                <button>
                                    <MdAddCircleOutline size={20} color="#7159c1" />
                                </button>
                            </div>
                        </td>
                        <td><strong>R$ 258,80</strong></td>
                        <td><button><MdDelete size={20} color="#7159c1" /></button></td>
                    </tr>
                </tbody>
            </ProductTable>

            <footer>
                <button>Finalizar pedido</button>

                <Total>
                    <span>TOTAL</span>
                    <strong>R$1920,28</strong>
                </Total>
            </footer>
        </Container>
    )
}
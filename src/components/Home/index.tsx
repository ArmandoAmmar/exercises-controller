import React from 'react';
// import { HomeStyle } from './styles';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
    return (
        <main className="container">
            <div className="text-center mb-4 mt-5">
                <h4>Exercicios e Repetições</h4>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Exercicio</th>
                        <th scope="col">Quantidade</th>
                        <th scope="col">Repetições</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Flexão</td>
                        <td>20</td>
                        <td>4</td>
                        <td>
                            <span className="button-container pr-2">
                                <Button variant="outline-primary">
                                    <FontAwesomeIcon icon={faEdit} />
                                </Button>
                            </span>
                            <span className="button-container">
                                <Button variant="outline-danger">
                                    <FontAwesomeIcon icon={faTrash} />
                                </Button>{' '}
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </main>
    );
}

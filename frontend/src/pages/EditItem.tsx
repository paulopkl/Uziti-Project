import Header from '../components/Header/Header';
import React from 'react';
import { useParams } from 'react-router-dom';
import Form from '../components/Form/Form';

const EditItem: React.FC = props => {
    const { _id } = useParams<any>();

    return (
        <>
            <Header />
            <Form _id={_id} />
        </>
    );
}

export default EditItem;
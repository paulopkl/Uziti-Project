import Header from '../components/Header/Header';
import React from 'react';
import { useParams } from 'react-router-dom';
import Form from '../components/Form/Form';

const CreateItem: React.FC = () => {
    return (
        <>
            <Header />
            <Form />
        </>
    );
}

export default CreateItem;
import React, { useState } from 'react';
import { InfoOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { Modal, Button, Tooltip } from 'antd';

const ModalInfo = (props) => {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <Tooltip >
                <Button icon={<InfoOutlined styles={{ display: 'flex', AlignItems: 'center' }} />}
                    type="default"
                    shape="circle"
                    onClick={showModal}
                    styles={{ display: 'flex' }}
                />
            </Tooltip>


            <Modal title="Mais Informações" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <div>
                    {//props.adicionais.response !== [] ? props.adicionais.response.id : ''
                    }
                </div>
                {console.log('1', props)}
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </>
    );

}

export default ModalInfo
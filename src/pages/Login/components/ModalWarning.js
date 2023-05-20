import { CloseCircleOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { Modal } from 'antd';
import s from '../../styles.module.css';

const ModalWarning = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();
  return (
    <Modal
      open={isOpen}
      closable="false"
      centered
      cancelButtonProps={{danger:'true'}}
      title="Необходимо регистрация"
      cancelText="Нет"
      okText='Да'
      closeIcon={<CloseCircleOutlined className={s.closeIcon} />}
      onCancel={() => {
        setIsOpen(false);
      }}
      onOk={() => navigate('/registry')}
    >
      {' '}<h3>Хотите зарегистрироваться?</h3>
    </Modal>
  );
};

export default ModalWarning;

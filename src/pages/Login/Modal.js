import { CloseCircleOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import s from '../styles.module.css';

const Modal = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();
  return (
    <Modal
      open={isOpen}
      closable="false"
      centered
      cancelText="Отмена"
      closeIcon={<CloseCircleOutlined className={s.closeIcon} />}
      onCancel={() => {
        setIsOpen(false);
      }}
      onOk={() => navigate('/registry')}
    >
      {' '}
      <h3>Сначала зарегистрируйтесь</h3>
    </Modal>
  );
};

export default Modal;

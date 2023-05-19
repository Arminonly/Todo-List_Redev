import { Row, Col } from 'antd';
import RegistryForm from './Components/RegistryForm';

export default function Registry() {
  return (
    <>
      <h1>Registry</h1>
      <Row wrap={false}>
        <Col flex="auto">
          <RegistryForm />
        </Col>
      </Row>
    </>
  );
}

import { Col, Row } from 'antd';
import {
  FacebookFilled,
  GithubFilled,
  LinkedinFilled,
  InstagramOutlined
} from '@ant-design/icons';

function Footer() {
  return (
    <div className="footer md:p-12 py-12">
      <div className="footer-menu md:w-96 m-auto">
        <Row justify="center">
            <Col span={4}>About</Col>
            <Col span={4}>Blog</Col>
            <Col span={4}>Jobs</Col>
            <Col span={4}>Press</Col>
        </Row>
      </div>
      <div className="footer-contact pt-6 w-96 m-auto ">
        <Row justify="center">
          <Col span={4}><FacebookFilled className="text-2xl"/></Col>
          <Col span={4}><GithubFilled className="text-2xl"/></Col>
          <Col span={4}><LinkedinFilled className="text-2xl"/></Col>
          <Col span={4}><InstagramOutlined className="text-2xl"/></Col>
        </Row>
      </div>
      <div className="footer-info pt-6">
        Happy New Year 2022.
      </div>
    </div>
  );
}

export default Footer;

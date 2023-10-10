import { Form, Input, Button } from 'antd';

const Forms = () => {
    const onFinish = (values: any) => {
        console.log('Received values from form: ', values);
    };

    return (
        <Form onFinish={onFinish}>
            <Form.Item label="Name" name="name" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default Forms;
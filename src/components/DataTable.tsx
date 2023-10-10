import { Table, Space } from 'antd';
import { CopyOutlined, DeleteOutlined } from '@ant-design/icons';

interface DataTableProps {
    data: {
        id: number;
        name: string;
        status: string;
    }[];
}

const DataTable = ({ data }: DataTableProps) => {
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'Action',
            key: 'action',
            render: () => (
                <Space size="middle">
                    <CopyOutlined />
                    <DeleteOutlined />
                </Space>
            ),
        },
    ];

    return <Table columns={columns} dataSource={data} />;
};

export default DataTable;
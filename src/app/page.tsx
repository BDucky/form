'use client'

import { Layout } from 'antd';
import Sidebar from '@/components/Sidebar';
import DataTable from '@/components/DataTable';
import SearchBar from '@/components/Searchbar';
import Forms from '@/components/Forms';
import { useRouter } from 'next/navigation';

const { Sider, Content } = Layout;

const HomePage = () => {
  const router = useRouter();

  const handleSearch = (value: any) => {
    console.log('Search value: ', value);
  };

  const handleMenuClick = (path: string) => {
    router.push(path);
  };

  const data = [
    { id: 1, name: 'John', status: 'Active' },
    { id: 2, name: 'Jane', status: 'Inactive' },
    { id: 3, name: 'Bob', status: 'Active' },
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider>
        <Sidebar />
      </Sider>
      <Layout>
        <Content style={{ padding: '20px' }}>
          {/* {router.pathname === '/dashboard' && ( */}
          <>
            <h1>Dashboard</h1>
            <SearchBar onSearch={handleSearch} />
            <DataTable data={data} />
          </>
          {/* )} */}
          {/* {router.pathname === '/forms' && <Forms />} */}
        </Content>
      </Layout>
    </Layout>
  );
};

export default HomePage;
import { Layout } from 'antd'
import React from 'react'
import MostFrequentlyAccessedUrls from './components/MostFrequentlyAccessedUrls'

const { Header, Content, Footer } = Layout

const App = () => {
  return (
    <Layout>
      <Header>
        <div style={{ color: 'white' }}>
          ShortTest
        </div>
      </Header>
      <Content style={{ padding: '2rem 3rem 0' }}>
        <MostFrequentlyAccessedUrls />
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        ShortTest (c)2021 Updated by Vin
      </Footer>
    </Layout>
  )
}

export default App

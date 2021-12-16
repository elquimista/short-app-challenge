import { Layout, Space } from 'antd'
import CreateShortenedUrlForm from './components/CreateShortenedUrlForm'
import MostFrequentlyAccessedUrls from './components/MostFrequentlyAccessedUrls'
import NewlyShortenedUrl from './components/NewlyShortenedUrl'
import React, { useState } from 'react'

const { Header, Content, Footer } = Layout

const App = () => {
  const [newlyShortenedUrl, setNewlyShortenedUrl] = useState(null)

  return (
    <Layout>
      <Header>
        <div style={{ color: 'white' }}>
          ShortTest
        </div>
      </Header>
      <Content style={{ padding: '2rem 3rem 0' }}>
        <Space
          direction="vertical"
          size="large"
        >
          <CreateShortenedUrlForm
            onSuccess={(url) => setNewlyShortenedUrl(url)}
          />
          <NewlyShortenedUrl url={newlyShortenedUrl} />
          <MostFrequentlyAccessedUrls />
        </Space>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        ShortTest (c)2021 Updated by Vin
      </Footer>
    </Layout>
  )
}

export default App

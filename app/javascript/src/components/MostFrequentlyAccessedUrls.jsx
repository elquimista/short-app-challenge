import { Table, Typography } from 'antd'
import React, { useEffect, useState } from 'react'

const { Title } = Typography

const MostFrequentlyAccessedUrls = () => {
  const [urls, setUrls] = useState([])

  useEffect(async () => {
    const response = await fetch('/')
    const data = await response.json()
    setUrls(data.urls)
  }, [])

  return (
    <>
      <Title level={2}>Top 100 most frequently accessed URLs</Title>
      <Table
        columns={[{
          title: 'URL',
          dataIndex: 'full_url',
          key: 'url',
        }, {
          title: 'Click Count',
          dataIndex: 'click_count',
          key: 'clickCount',
        }]}
        dataSource={urls}
        rowKey="id"
      />
    </>
  )
}

export default MostFrequentlyAccessedUrls

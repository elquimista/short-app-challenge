import { Table, Typography } from 'antd'
import React, { useEffect, useState } from 'react'

const { Title } = Typography

const MostFrequentlyAccessedUrls = () => {
  const [urls, setUrls] = useState([])

  useEffect(async () => {
    const response = await fetch('/short_urls')
    const data = await response.json()
    setUrls(data.urls)
  }, [])

  return (
    <>
      <Title level={2}>Top 100 most frequently accessed URLs</Title>
      <Table
        columns={[{
          title: 'Full URL',
          dataIndex: 'full_url',
          key: 'url',
          render: (text) => <a href={text} target="_blank">{text}</a>,
        }, {
          title: 'Shortened URL',
          dataIndex: 'shortened_url',
          key: 'shortened_url',
          render: (text) => <a href={text} target="_blank">{text}</a>,
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

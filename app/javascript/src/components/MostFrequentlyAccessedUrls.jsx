import { Table } from 'antd'
import React, { useEffect, useState } from 'react'

const MostFrequentlyAccessedUrls = () => {
  const [urls, setUrls] = useState([])

  useEffect(async () => {
    const response = await fetch('/')
    const data = await response.json()
    setUrls(data.urls)
  }, [])

  return (
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
  )
}

export default MostFrequentlyAccessedUrls

import { Typography } from 'antd'
import React from 'react'

const { Link, Text } = Typography

const NewlyShortenedUrl = ({ url }) => {
  if (!url) return null

  const { fullUrl, shortenedUrl } = url

  return (
    <div>
      <Link href={fullUrl} target="_blank">
        { fullUrl }
      </Link>
      <Text>
        { ' is now shortened to ' }
      </Text>
      <Link href={shortenedUrl} target="_blank">
        { shortenedUrl }
      </Link>
    </div>
  )
}

export default NewlyShortenedUrl

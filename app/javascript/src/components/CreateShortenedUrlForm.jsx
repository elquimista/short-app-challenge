import { Form, Input, Button } from 'antd'
import React, { useCallback, useState } from 'react'

const CreateShortenedUrlForm = ({
  onSuccess,
}) => {
  const [form] = Form.useForm()
  const [serverErrors, setServerErrors] = useState([])
  const handleOnFinish = useCallback(async (values) => {
    setServerErrors([])

    const response = await fetch('/short_urls', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    })
    const data = await response.json()

    if (response.status === 201) {
      form.setFieldsValue({ full_url: '' })
      onSuccess && onSuccess({
        fullUrl: values.full_url,
        shortenedUrl: data.shortened_url,
      })
    } else if (response.status === 422) {
      setServerErrors(data.errors)
    }
  })

  return (
    <Form
      form={form}
      layout="inline"
      onFinish={handleOnFinish}
      onFinishFailed={() => setServerErrors([])}
      requiredMark={false}
    >
      <Form.Item
        help={serverErrors.length > 0 ? serverErrors.join('\n') : null}
        label="Shorten a URL"
        name="full_url"
        rules={[{
          required: true,
          message: 'URL is required',
        }]}
        validateStatus={serverErrors.length > 0 ? 'error' : null}
      >
        <Input placeholder="https://zoogle.com" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">Go</Button>
      </Form.Item>
    </Form>
  )
}

export default CreateShortenedUrlForm

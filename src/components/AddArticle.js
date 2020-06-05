import React from 'react'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks'
import {
  Typography,
  Form,
  Input,
  Button,
  Select,
  DatePicker,
  message
} from 'antd';

const ADD_ARTICLE = gql`
  mutation addArticle($article: articles_insert_input!) {
    insert_articles(objects: [$article]) {
      returning {
        id
        title
        articles_categories {
          category_id
        }
      }
    }
  }
`;

const AddArticle = () => {
  const { Title } = Typography;
  const { TextArea } = Input;
  const { Option } = Select;
  const [form] = Form.useForm();
  const [insert_article, { loading, error } ] = useMutation(ADD_ARTICLE);
  const key = 'updatable';

  const postArticle = () => {
    if (loading) message.loading({ content: 'Loading...', key})

    if (error) {
      message.error({ content: `error: ${error.message}`, key})
    } else {
      message.success({ content: 'Loaded!', key, duration: 2 })
      form.resetFields()
    }
  }

  const onFinish = value => {
    const data = {
      "data": {
        "category_id": parseInt(value.category_id)
      }
    }

    value.articles_categories = data
    delete value.category_id

    insert_article({
      variables: {
        "article": value
      }
    })
    postArticle()
  }

  return (
    <>
      <Title style={{ textAlign: 'center' }}>Добавить новость</Title>
      <Form
        form={form}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        onFinish={onFinish}
      >
        <Form.Item
          label="Заголовок"
          name="title"
          rules={[
            {
              required: true,
              message: 'Please input your title!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Латиница"
          name="slug"
          rules={[
            {
              required: true,
              message: 'Please input your slug!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Тизер"
          name="teaser"
          rules={[
            {
              required: true,
              message: 'Please input your teaser!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Текст"
          name="body"
          rules={[
            {
              required: true,
              message: 'Please input your text!',
            },
          ]}
        >
          <TextArea />
        </Form.Item>
        <Form.Item
          label="Select"
          name="category_id"
          rules={[
            {
              required: true,
              message: 'Please select categories article'
            }
          ]}
        >
          <Select placeholder="Please select categories article" >
            <Option value="3">Наука</Option>
            <Option value="2">Спорт</Option>
            <Option value="1">Бизнес</Option>
            <Option value="4">Все новости</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="DatePicker"
          name="created_at"
          rules={[
            {
              required: true,
              message: 'Please select date'
            }
          ]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item label="Button">
          <Button type="primary" htmlType="submit">Button</Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default AddArticle;
import React, { useState } from 'react'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks'
import {
  Typography,
  Form,
  Input,
  Button,
  Select,
  DatePicker,
} from 'antd';

const ADD_ARTICLE = gql`
  mutation addArticle($article: articles_insert_input!) {
    insert_articles(objects: [$article]) {
      returning {
        id
        title
      }
    }
  }
`;

const AddArticle = () => {
  const { Title } = Typography;
  const { TextArea } = Input;
  const { Option } = Select;

  const [articleTitle, setArticleTitle] = useState('')
  const [articleSlug, setArticleSlug] = useState('')
  const [articleTeaser, setArticleTeaser] = useState('')
  const [articleBody, setArticleBody] = useState('')
  const [articleDate, setArticleDate] = useState('2020-06-01')
  const [insert_article, { loading, error }] = useMutation(ADD_ARTICLE);

  if (loading) return "loading...";
  if (error) return `error: ${error.message}`;

  return (
    <>
      <Title>Добавить новость</Title>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        onFinish={() => {
          insert_article({
            variables: {
              "article": {
                "title": articleTitle,
                "slug": articleSlug,
                "teaser": articleTeaser,
                "body": articleBody,
                "created_at": articleDate
              }
            }
          })
        }}
      >
        <Form.Item label="Заголовок">
          <Input value={articleTitle} onChange={e => (setArticleTitle(e.target.value))} />
        </Form.Item>
        <Form.Item label="Латиница">
          <Input value={articleSlug} onChange={e => (setArticleSlug(e.target.value))} />
        </Form.Item>
        <Form.Item label="Тизер">
          <Input value={articleTeaser} onChange={e => (setArticleTeaser(e.target.value))} />
        </Form.Item>
        <Form.Item label="Текст">
          <TextArea value={articleBody} onChange={e => (setArticleBody(e.target.value))} />
        </Form.Item>
        <Form.Item label="Select">
          <Select mode="multiple" placeholder="Please select favourite colors">
            <Option value="red">Red</Option>
            <Option value="green">Green</Option>
            <Option value="blue">Blue</Option>
          </Select>
        </Form.Item>
        <Form.Item label="DatePicker">
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
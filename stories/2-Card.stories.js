import React from 'react'
import { Card } from 'antd'
import { Link } from 'gatsby'
import { storiesOf } from '@storybook/react'
import { actions } from '@storybook/addon-actions'

storiesOf('Card', module)
  .add('Card', () => (
    <Card
        hoverable
        cover={
          <img
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
    >
      <Link to={`/#`}>Ссылка</Link>
    </Card>
  ));
/* eslint react/prefer-stateless-function: 0 */

import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { Layout, Card } from '@shopify/polaris';
import '@shopify/polaris/styles.css';

class Index extends React.Component {
  static propTypes = {
    user: PropTypes.shape({
      email: PropTypes.string.isRequired,
    }),
  };

  static defaultProps = {
    user: null,
  };

  render() {
    return (
      <div style={{ padding: '10px 45px' }}>
        <Head>
          <title>Dashboard</title>
          <meta name="description" content="description for indexing bots" />
        </Head>
        <Layout>
          <Card>
            <p>Dashboard</p>
            <p>Polaris sample working!</p>
          </Card>
        </Layout>
      </div>
    );
  }
}

export default Index;

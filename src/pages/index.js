import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';
import "../css/home.scss";
import { Button } from 'antd';
import Link from '@docusaurus/Link';


export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      // title={`Hello from ${siteConfig.title}`}
      // description="Description will go into a meta tag in <head />">
      wrapperClassName="home"
    >
      <main>
        <div className="home-container">
          <div className="introduce">
            <h1>Docusaurus技术简介</h1>
            <p>
              Docusaurus 是一款开箱即用的<strong>静态站点生成器</strong>，
              使用 <strong>React</strong> 开发。
            </p>
            <Link to="/introduction/start">
              <Button>
                Get Started
              </Button>
            </Link>
          </div>
          <img
            alt="Example Image"
            src="img/undraw_docusaurus_tree.svg"
          />
        </div>
      </main>
    </Layout>
  );
}

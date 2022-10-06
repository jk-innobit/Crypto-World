import React from 'react';
import { Select, Typography, Row, Col, Avatar, Card} from 'antd';
import moment from 'moment';

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';

const News = (props:any) => {
  const {data:cryptoNews,isFetching} = useGetCryptoNewsQuery({newsCategory:'Cryptocurrency',count:props.simplified?10:100});

  console.log(cryptoNews);

  if(isFetching) return (<div>Loading ... </div>)

  return (
    <div>News</div>
  )
}

export default News
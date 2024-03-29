import React,{useState,useEffect} from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input} from 'antd';

import { useGetCryptosQuery } from '../services/cryptoApi';

const Cryptocurrencies = (props:any) => {
  const count=props.simplified?10:100;
  const { data:cryptoList,isFetching} = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState(cryptoList?.data?.coins);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const filteredData = cryptoList?.data?.coins.filter((coin: { name: string; })=>coin.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setCryptos(filteredData);
  }, [cryptoList,searchTerm])
  

  if(isFetching) return (<div>Loading ... </div>)
  
  return (
    <>
    {!props.simplified && (
      <div className="search-crypto">
        <Input placeholder='Search Cryptocurrency' onChange={(e)=>setSearchTerm(e.target.value)}/>
      </div>
    )}
    <Row gutter={[32,32]} className='crypto-card-container'>
      {cryptos?.map((currency: { uuid: React.Key | null | undefined; rank: any; name: any; iconUrl: string | undefined; price: number; marketCap: number; change: number; })=>(
        <Col xs={24} sm={12} lg={6} className='crypto-card' key={currency.uuid}>
          <Link to={`/crypto/${currency.uuid}`}>
            <Card
              title={`${currency.rank}. ${currency.name}`}
              extra={<img className='crypto-image' src={currency.iconUrl} />}
              hoverable
            >
              <p>Price: {millify(currency.price)}</p>
              <p>Market Cap: {millify(currency.marketCap)}</p>
              <p>Daily Change: {millify(currency.change)}</p>
            </Card>
          </Link>
        </Col>
      ))}
    </Row>
    </>
  )
}

export default Cryptocurrencies
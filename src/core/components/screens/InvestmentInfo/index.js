import React, { useEffect, useState } from 'react';
import { Row, Button, Col, FloatingLabel, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getDashboard, saveETFs } from '../../../actions';
import { testJson } from '../../../utils/testData';
import Funds from '../../shared/Funds';

const InvestmentInfo = (props) => {
  const { etfData } = props;
  const [date, setDate] = useState('');
  const [etfObj, setEtfObj] = useState(etfData ? etfData : {});

  useEffect(() => {
    const obj = JSON.parse(JSON.stringify(etfObj));
    Object.entries(etfObj).forEach(([fundKey, fundValue]) => {
      if (fundValue?.series) {
        Object.entries(fundValue.series).forEach(([key, value]) => {
          obj[fundKey].series[key].latest_nav.date = date;
        });
      }
    });
    setEtfObj(obj);
  }, [date]);

  useEffect(() => {
    if (etfData) {
      setEtfObj(etfData);
    }
  }, etfData);
  console.log(etfObj);

  return (
    <>
      <h1>Welcome to Investment Info</h1>
      <Row className='g-2 m-20'>
        <Button
          variant='secondary'
          onClick={() => {
            props.loadETFData({});
          }}
        >
          Load ETFs from the server
        </Button>
      </Row>
      {props.etfData && (
        <Row className='g-2 m-20'>
          <Col>
            <FloatingLabel controlId='floatingInputGrid' label='Date'>
              <Form.Control
                type='string'
                placeholder='Date'
                defaultValue={date}
                onChange={(event) => setDate(event.target.value)}
              />
            </FloatingLabel>
          </Col>
          <Col></Col>
          <Col></Col>
        </Row>
      )}
      {props.etfData &&
        Object.entries(etfObj).map(([key, value], index) => {
          return (
            <Funds
              key={key}
              fundId={key}
              fund={value}
              etfObj={etfObj}
              setEtfObj={setEtfObj}
              data={date}
            />
          );
          // return <Funds />;
        })}
      {props.etfData && (
        <Row className='g-2 m-20'>
          <Button
            variant='primary'
            onClick={() => {
              console.log('button clicked');
              props.saveETFData(etfObj);
            }}
          >
            Submit the data to server and generate the CSV
          </Button>
        </Row>
      )}
    </>
  );
};

const mapStateToProps = ({ dashboard }) => {
  return { etfData: dashboard.stocksInfo, loading: dashboard.loading };
};

const mapDispatchToProps = {
  loadETFData: getDashboard,
  saveETFData: saveETFs,
};

export default connect(mapStateToProps, mapDispatchToProps)(InvestmentInfo);

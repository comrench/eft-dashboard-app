import React, { useEffect, useState } from 'react';
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import Series from '../Series';

const Funds = (props) => {
  const { fundId, fund, etfObj, setEtfObj, date } = props;
  const [aum, setAum] = useState(fund.aum);
  const series = fund.series;
  const fundIdentity = `${fund.fundName} (${fundId})`;

  useEffect(() => {
    const obj = JSON.parse(JSON.stringify(etfObj));
    obj[fundId].aum = parseFloat(aum);
    setEtfObj(obj);
  }, [aum]);

  return (
    <>
      <Row className='g-2 m-20'>
        <Col>
          <FloatingLabel
            controlId='floatingSelectGrid'
            label={fundIdentity}
          ></FloatingLabel>
        </Col>
        <Col md>
          <FloatingLabel controlId='floatingInputGrid' label='AUM'>
            <Form.Control
              type='number'
              placeholder='AUM'
              defaultValue={aum}
              onChange={(event) => setAum(event.target.value)}
            />
          </FloatingLabel>
        </Col>
        <Col></Col>
      </Row>
      {series &&
        Object.entries(series).map(([seriesID, serie], index) => {
          return (
            <Series
              key={seriesID}
              seriesID={seriesID}
              serie={serie}
              fundId={fundId}
              etfObj={etfObj}
              date={date}
              setEtfObj={setEtfObj}
            />
          );
        })}
    </>
  );
};

export default Funds;

import React, { useEffect, useState } from 'react';
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap';

const Series = (props) => {
  const { seriesID, serie, etfObj, setEtfObj, fundId, date } = props;
  const [nav, setNav] = useState(serie.latest_nav.value);

  useEffect(() => {
    const obj = JSON.parse(JSON.stringify(etfObj));
    obj[fundId].series[seriesID].latest_nav.value = parseFloat(nav);
    setEtfObj(obj);
  }, [nav]);

  return (
    <>
      <Row className='g-2 m-20'>
        <Col></Col>
        <Col>
          <FloatingLabel
            controlId='floatingSelectGrid'
            label={seriesID}
          ></FloatingLabel>
        </Col>
        <Col>
          <FloatingLabel controlId='floatingInputGrid' label='NAV'>
            <Form.Control
              type='number'
              placeholder='NAV'
              defaultValue={nav}
              onChange={(event) => setNav(event.target.value)}
            />
          </FloatingLabel>
        </Col>
      </Row>
    </>
  );
};

export default Series;

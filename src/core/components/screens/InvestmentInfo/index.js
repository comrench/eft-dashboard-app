import React from 'react';
import { Row, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getDashboard } from '../../../actions';

const InvestmentInfo = (props) => {
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
      <h2>Data from the ETF 1</h2>
      <h2>Data from the ETF 2</h2>
      <h2>Data from the ETF 3</h2>
      <h2>Data from the ETF 4</h2>
      <Row className='g-2 m-20'>
        <Button
          variant='primary'
          onClick={() => {
            console.log('button clicked');
            // props.updateStructure({});
          }}
        >
          Submit the data to server and generate the CSV
        </Button>
      </Row>
    </>
  );
};

const mapStateToProps = ({ dashboard }) => {
  return { directoryContent: dashboard.stocksInfo, loading: dashboard.loading };
};

const mapDispatchToProps = {
  loadETFData: getDashboard,
};

export default connect(mapStateToProps, mapDispatchToProps)(InvestmentInfo);

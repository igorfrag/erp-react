import React from 'react';
import Card from '../components/Card/Card';
import ChartCard from '../components/Card/ChartCard';
import './pages.css';
import { FaCashRegister } from 'react-icons/fa';
import { FiBox, FiDollarSign } from 'react-icons/fi';
import { BiPackage } from 'react-icons/bi';
import SalesOrders from '../components/Table/SalesOrders';
import PurchaseOrders from '../components/Table/PurchaseOrders';

function Dashboard() {
  return (
    <div className='container'>
      Dashboard
      <div className='grid-container-dashboard'>
        <Card
          className='CardOne'
          title='Total Sales'
          value={21844.7}
          isMoney='true'
          icon={<FaCashRegister />}
          iconFill='white'
        ></Card>
        <Card
          className='CardTwo'
          title='Total Cost'
          value={20650.0}
          isMoney='true'
          icon={<FiDollarSign />}
          iconStroke='white'
        ></Card>
        <Card
          className='CardThree'
          title='Products Sold'
          value={5420}
          icon={<FiBox />}
          iconFill='indigo'
          iconStroke='white'
        ></Card>
        <Card
          className='CardFour'
          title='Stock on Hand'
          value={251844.7}
          isMoney='true'
          icon={<BiPackage />}
          iconFill='white'
        ></Card>
        <div className='Graphs'>
          <ChartCard className='GraphOne' title='Revenue vs Costs'></ChartCard>
          <ChartCard className='GraphTwo' title='Purchase Summary'></ChartCard>
          <ChartCard className='GraphThree' title='Products Sold'></ChartCard>
        </div>
        <div className='Sales'>
          <div className='SalesOrders'>
            <SalesOrders></SalesOrders>
          </div>
          <div className='PurchaseOrders'>
            <PurchaseOrders></PurchaseOrders>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

import React from 'react';
import Card from '../components/Card/Card';
import ChartCard from '../components/Card/ChartCard';
import './pages.css';
import { FaCashRegister } from 'react-icons/fa';
import { FiBox, FiDollarSign } from 'react-icons/fi';
import { BiPackage } from 'react-icons/bi';

function Dashboard() {
  return (
    <div className='container'>
      Dashboard
      <div className='grid-container-dashboard'>
        <Card
          title='Total Sales'
          value={21844.7}
          isMoney='true'
          icon={<FaCashRegister />}
          iconFill='white'
        ></Card>
        <Card
          title='Total Cost'
          value={20650.0}
          isMoney='true'
          icon={<FiDollarSign />}
          iconStroke='white'
        ></Card>
        <Card
          title='Products Sold'
          value={5420}
          icon={<FiBox />}
          iconFill='indigo'
          iconStroke='white'
        ></Card>
        <Card
          title='Stock on Hand'
          value={251844.7}
          isMoney='true'
          icon={<BiPackage />}
          iconFill='white'
        ></Card>
        <div className='dashboard-graph'>
          <ChartCard title='Teste'></ChartCard>
        </div>
        <div className='dashboard-graph-two'>
          <ChartCard title='Teste'></ChartCard>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

import React from 'react';
import Card from '../components/Card/Card';
import ChartCard from '../components/Card/ChartCard';
import './pages.css';

function Dashboard() {
  return (
    <div className='container'>
      Dashboard
      <div className='grid-container-dashboard'>
        <Card title='Total Sales' value={21844.7} isMoney='true'></Card>
        <Card title='Total Cost' value={20650.0} isMoney='true'></Card>
        <Card title='Products Sold' value={5420}></Card>
        <Card title='Stock on Hand' value={251844.7} isMoney='true'></Card>
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

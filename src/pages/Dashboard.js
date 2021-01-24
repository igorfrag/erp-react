import React from 'react';
import Card from '../components/Card/Card';
import ChartCard from '../components/ChartCard/ChartCard';
import './pages.css';

function Dashboard() {
  return (
    <div className='container'>
      Dashboard
      <div className='grid-container'>
        <Card title='Total Sales' value={21844.7} isMoney='true'></Card>
        <Card title='Total Cost' value={20650.0} isMoney='true'></Card>
        <Card title='Products Sold' value={5420}></Card>
        <Card title='Stock on Hand' value={251844.7} isMoney='true'></Card>
        <ChartCard></ChartCard>
      </div>
    </div>
  );
}

export default Dashboard;

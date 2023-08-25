import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Table from '../Table/Table';
const ExcelSheet: React.FC = () => {
  return (
    <div>
      <Header />
      <Table /> 
      <Footer />
    </div>
  );
};

export default ExcelSheet;
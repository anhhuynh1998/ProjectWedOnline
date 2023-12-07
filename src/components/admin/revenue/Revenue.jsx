import React, { PureComponent, useState } from 'react';
import { useEffect } from 'react';
import { Tooltip, Line, LineChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { RevenueService } from '../../../service/admin/revenue/revenueService';
import moment from 'moment'
import RevenueStatistics from './RevenueStatistics';
import Sales from './Sales';
import RevenueByMonth from './RevenueByMonth';

const Revenue = () => {
  const [data, setData] = useState([]);
  const [startDate, setStartDate] = useState(new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]);
  const [endDate, setEndDate] = useState(new Date().toISOString().split('T')[0]);
  const start = moment(startDate, "YYYY/MM/DD");
  const end = moment(endDate, "YYYY/MM/DD");
  const [dayList, setDayList] = useState([]);

  useEffect(() => {
    let currentDate = start.clone();
    const updatedDayList = [];
    while (currentDate.isSameOrBefore(end, 'day')) {
      const startOfMonth = currentDate.clone().startOf('day');
      const endOfMonth = currentDate.clone().endOf('day');
      updatedDayList.push({
        start: startOfMonth.format('YYYY-MM-DD'),
        end: endOfMonth.format('YYYY-MM-DD'),
      });
      currentDate.add(1, 'day');
    }
    setDayList(updatedDayList);
  }, [startDate, endDate]);

  useEffect(() => {
    revenue();
  }, [dayList])

  async function revenue() {
    try {
      const newData = [];
      for (const day of dayList) {
        const response = await RevenueService.totalRevenue(day.start, day.end);
        newData.push({
          orderDate: moment(day.start || day.end, 'YYYY/MM/DD').format('DD-MM-YYYY'),
          totalPrice: response.data.reduce((total, item) => total + item.totalPrice, 0)
        });
      }
      setData(newData);
    } catch (error) {
      console.log(error, "Error");
    }
  }
  const changeStartDate = (e) => {
    setStartDate(e.target.value);
  }

  const changeEndDate = (e) => {
    console.log("endDate", e.target.value);
    setEndDate(e.target.value);
  }

  return (
    <div >
      <RevenueStatistics />
      <Sales />
      <div className="card-header ">
        <div className="d-flex justify-content-between align-items-center">
          <h4>Doanh Thu</h4>
          <div className="mt-2 d-flex" id="input-date">
            <div className="mr-2 form-label my-auto">
              Từ ngày
            </div>
            <div className="ml-2 mr-2">
              <input type="date" min="2020-01-01" max=""
                className="form-control report-date" value={startDate}
                id='dateStartReport' onChange={(e) => changeStartDate(e)}
              />
            </div>
            <div className="mr-2 form-label my-auto">
              đến ngày
            </div>
            <div className="mr-2">
              <input type="date" min="2020-01-01" max=""
                className="form-control report-date"
                id='dateEndReport' value={endDate}
                onChange={(e) => changeEndDate(e)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className='revenue'  >
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            width={400}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="orderDate" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="totalPrice" strokeOpacity="totalPrice"
              stroke="#184dca" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <RevenueByMonth />
    </div>

  );
};

export default Revenue;

import React, { PureComponent, useState } from 'react';
import { useEffect } from 'react';
import { Tooltip, Legend, Line, LineChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { RevenueService } from '../../../service/admin/revenue/revenueService';

const Revenue = () => {

  const [data, setData] = useState([]);
  const [startDate, setStartDate] = useState(new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]);
  const [endDate, setEndDate] = useState(new Date().toISOString().split('T')[0]);
  const [opacity, setOpacity] = useState({
    uv: 1,
    pv: 1,
  });

  console.log(startDate);


  useEffect(() => {
    revenue();
  }, [startDate, endDate])

  async function revenue() {
    try {
      const response = await RevenueService.totalRevenue(startDate, endDate,);
      console.log("response", response.data);
      setData(response.data);
    } catch (error) {
      console.log(error, "chi rua bay");
    }
  }

  const changeStartDate = (e) => {
    setStartDate(e.target.value);
  }

  const changeEndDate = (e) => {
    console.log("endDate", e.target.value);
    setEndDate(e.target.value);
  }
  console.log(data);

  // const handleMouseEnter = (dataKey) => {
  //   setOpacity((prevOpacity) => ({
  //     ...prevOpacity,
  //     [dataKey]: 0.5,
  //   }));
  // };

  // const handleMouseLeave = (dataKey) => {
  //   setOpacity((prevOpacity) => ({
  //     ...prevOpacity,
  //     [dataKey]: 1,
  //   }));
  // };

  return (
    <div >
      <div className="card-header ">
        <div className="d-flex justify-content-between align-items-center">
          <h4>Doanh Thu</h4>
          <div className="mt-2 d-flex" id="input-date">
            <div className="mr-2 form-label my-auto">
              Từ ngày
            </div>
            <div className="ml-2 mr-2">
              <input type="date" min="2020-01-01" max=""
                className="form-control report-date"
                id='dateStartReport' onChange={(e) => changeStartDate(e)}
              />
            </div>
            <div className="mr-2 form-label my-auto">
              đến ngày
            </div>
            <div className="mr-2">
              <input type="date" min="2020-01-01" max=""
                className="form-control report-date"
                id='dateEndReport'
                onChange={(e) => changeEndDate(e)}
              />
            </div>
          </div>
        </div>
      </div>

      <div style={{ width: '100%', paddingTop: "2%" }}>
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
            {/* <Legend onMouseEnter={(e) => handleMouseEnter(e.dataKey)}
              onMouseLeave={(e) => handleMouseLeave(e.dataKey)} /> */}
            <Line type="monotone" dataKey="totalPrice" strokeOpacity="totalPrice"
              stroke="#a80424" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Revenue;

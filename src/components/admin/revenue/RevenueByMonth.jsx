import React, { useState } from 'react';
import { useEffect } from 'react';
import { Tooltip, Line, LineChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { RevenueService } from '../../../service/admin/revenue/revenueService';
import moment from 'moment'
import { ToastError } from '../../../toastify/Toast';

const RevenueByMonth = () => {
    const [data, setData] = useState([]);
    const [start, setStart] = useState('2023-01');
    const [end, setEnd] = useState('2023-12');
    const startMonth = moment(start + "-01", 'YYYY/MM/DD');
    const endMonth = moment(end, 'YYYY/MM/DD').endOf('month');
    const [monthList, setMonthList] = useState([]);
    useEffect(() => {
        let currentDate = startMonth.clone();
        const updatedMonthList = [];
        while (currentDate.isSameOrBefore(endMonth, 'month')) {
            const startOfMonth = currentDate.clone().startOf('month');
            const endOfMonth = currentDate.clone().endOf('month');
            updatedMonthList.push({
                start: startOfMonth.format('YYYY-MM-DD'),
                end: endOfMonth.format('YYYY-MM-DD'),
            });
            currentDate.add(1, 'month');
        }
        setMonthList(updatedMonthList);
    }, [start, end]);

    useEffect(() => {
        revenue();
    }, [monthList])

    async function revenue() {
        try {
            const newData = [];
            for (const month of monthList) {
                const response = await RevenueService.totalRevenue(month.start, month.end);
                const monthlyTotalPrice = response.data.reduce((total, item) => total + item.totalPrice, 0);
                const formattedOrderDate = moment(month.start, 'YYYY/MM').format('MM-YYYY');
                newData.push({
                    orderDate: formattedOrderDate,
                    totalPrice: monthlyTotalPrice,
                });
            }
            setData(newData);
        } catch (error) {
            ToastError("Doanh thu tháng bị lôĩ");
        }
    }

    const changeStartDate = (e) => {
        console.log("startdate", changeStartDate);
        setStart(e.target.value);
    }

    const changeEndDate = (e) => {
        console.log("endDate", e.target.value);
        setEnd(e.target.value);
    }

    return (
        <div>
            <div className="card-header" id='RevenueByYear'>
                <div className="d-flex justify-content-between align-items-center">
                    <h4>Doanh Thu Theo Tháng</h4>
                    <div className="mt-2 d-flex" id="input-date">
                        <div className="mr-2 form-label my-auto">
                            Từ ngày
                        </div>
                        <div className="ml-2 mr-2">
                            <input type="month" min="2010" max="2050"
                                className="form-control report-date" value={start}
                                id='dateStartReport' onChange={(e) => changeStartDate(e)}
                            />
                        </div>
                        <div className="mr-2 form-label my-auto">
                            đến ngày
                        </div>
                        <div className="mr-2">
                            <input type="month" min="2020-01-01" max=""
                                className="form-control report-date"
                                id='dateEndReport' value={end}
                                onChange={(e) => changeEndDate(e)}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ width: '100%', paddingTop: "2%", paddingBottom: "7%" }}>
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
                            stroke="#184dca" activeDot={{ r: 8 }} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default RevenueByMonth;

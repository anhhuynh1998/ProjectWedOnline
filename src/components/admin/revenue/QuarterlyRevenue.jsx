import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { CartService } from "../../../service/admin/cart/cartService";
import formatPrice from "../../layoutHome/formatPrice/formatPrice";
import { ToastError } from "../../../toastify/Toast";



export const QuarterlyRevenue = () => {
  const [month, setMonth] = useState([]);
  useEffect(() => {
    try {
      // eslint-disable-next-line no-inner-declarations
      async function quarterly() {
        let response = await CartService.quarterlyRevenue();
        console.log(response.data, "doanh thu theo quy");
        const formattedData = Object.keys(response.data).map(key => {
          let quarterName = "";
          switch(key){
            case "q1": quarterName = "Quý 1";
            break;
            case "q2": quarterName = "Quý 2";
            break;
            case "q3": quarterName = "Quý 3";
            break;
            case "q4": quarterName = "Quý 4";
            break;
            default:
              quarterName = key
          }
          return{
          name: quarterName,
          DoanhThu: response.data[key]
        }});
        setMonth(formattedData);
      }
      quarterly();
    } catch (error) {
      ToastError("Doanh thu quý bị lỗi");
    }
  }, [])

  return (
    <div className="quarterly animate__animated animate__fadeInRight" >
      <BarChart width={500} height={330} data={month} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        barSize={20}
      >
        <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
        <YAxis />
        <Tooltip />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="DoanhThu" fill="#8750af" background={{ fill: "#eee" }} />
      </BarChart>
      
    <div className="navbar-expand-lg bg-white" id="quarter-title">
      <h5 className="text-muted" id="lead">Doanh Thu Theo Quý </h5> 
    </div>
    </div>
  );

}

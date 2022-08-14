import moment from "moment";


export const formatDateTime = (dataTime)=>{
    const d = new Date(dataTime+(24*3600*1000));
    return  moment.utc(d).format('DD/MM/YYYY'); 
}
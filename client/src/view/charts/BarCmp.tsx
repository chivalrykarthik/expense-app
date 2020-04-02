import React from 'react';
import { Bar } from 'react-chartjs-2';

//const data = [1, 2, 3, 4];
//const label = ['One', 'Two', 'Three', 'Four'];
//const colorCode =
//  ["#BA55D3", "#8FBC8B", "#EE82EE", "#F08080", "#FF7F50", "#DA70D6", "#2E8B57", "#FF4500", "#E9967A", "#4B0082", "#20B2AA", "#32CD32", "#FF1493", "#DC143C", "#9932CC", "#006400", "#C71585", "#FFD700", "#8B008B", "#00FF7F", "#6A5ACD", "#FF00FF", "#6B8E23", "#98FB98", "#9ACD32", "#FF69B4", "#008080", "#008000", "#FA8072", "#FFA500", "#DB7093", "#800080", "#B22222", "#7CFC00", "#8A2BE2", "#3CB371", "#228B22", "#FFA07A", "#00FA9A", "#483D8B", "#556B2F", "#00FF00", "#808000", "#66CDAA", "#008B8B", "#7B68EE", "#DDA0DD", "#FFFF00", "#FF6347", "#BDB76B", "#663399", "#90EE90", "#ADFF2F", "#FF8C00", "#FF00FF", "#FFA07A", "#FF0000", "#8B0000", "#9400D3", "#CD5C5C", "#7FFF00"];
interface Arr{
    [index:number]:string;
}
interface IProps{
    label?:any;
    data?:any;
}
const BarCmp:React.FC<IProps> = (props) => {
    return (
        <div style={{ width: '50%' }}>
            <Bar
                data={
                    {
                        labels: props.label,
                        datasets: [{
                            label: 'Price',
                            //  backgroundColor: colorCode,
                            backgroundColor: "#FF7F50",
                            data: props.data
                        }]
                    }
                }
            />
        </div>
    )
}
BarCmp.defaultProps = {
    label: [''],
    data: ['']
}

export default BarCmp;
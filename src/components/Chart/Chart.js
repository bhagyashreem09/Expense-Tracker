import ChartBar from './ChartBar';
import './Chart.css';

function Chart(props) {

    const datapointValues = props.datapoints.map(datapoint => datapoint.value);
    const totalMaximum = Math.max(...datapointValues);  //since max() wants aruguements, and not an array, we extract all the values from datapointValues.
     
    return (
        <div className='chart'>
            {props.datapoints.map( (datapoint) => 
                <ChartBar
                    key = {datapoint.label}
                    value = {datapoint.value}
                    maxValue = {totalMaximum}
                    label = {datapoint.label}
                />
            )}
        </div>
    )
}

export default Chart;
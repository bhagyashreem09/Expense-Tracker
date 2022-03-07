
import './ChartBar.css';

function ChartBar(props) {
    let barFillHeight = '0%';

    if (props.maxValue > 0) {
        barFillHeight = Math.round( (props.value / props.maxValue) * 100) + '%';
    }

    return (
        <div className = "chart-bar">

            <div className = "chart-bar__inner"> 

                <div 
                    className = "chart-bar__fill"
                    style = {{ height : barFillHeight }}  // dynamic Css styling. First curly brace because passing dynamic data. Second curly brace because passing Object.
                    ></div>

            </div>

            <div className = "chart-bar__label"> { props.label } </div>

        </div>
    );
};

export default ChartBar;
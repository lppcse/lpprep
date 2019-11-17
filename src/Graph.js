import React, {Component} from 'react';
import { Chart } from 'react-charts';

class Graphr extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {"results":[{"gender":"male","name":{"title":"Mr","first":"احسان","last":"قاسمی"},"location":{"street":{"number":4193,"name":"شهید دکتر آیت"},"city":"ایلام","state":"آذربایجان غربی","country":"Iran","postcode":92215,"coordinates":{"latitude":"33.9747","longitude":"-71.3897"},"timezone":{"offset":"-6:00","description":"Central Time (US & Canada), Mexico City"}},"email":"hsn.qsmy@example.com","login":{"uuid":"2736620e-7773-4146-a8c3-d7dc52331712","username":"smallelephant883","password":"longer","salt":"BECogrAP","md5":"99dc3cecf3a4d73d779c0a634d56d050","sha1":"7d9e88c0137ddf8bb80005f9a13c84071f99790a","sha256":"7b0dd9cd38b211b7e7b84d250f7e1f37a045edfb0eba7a3b766a68059368c9ef"},"dob":{"date":"1970-11-16T10:44:49.869Z","age":49},"registered":{"date":"2016-12-10T09:09:52.294Z","age":3},"phone":"031-22041160","cell":"0972-849-8167","id":{"name":"","value":null},"picture":{"large":"https://randomuser.me/api/portraits/men/75.jpg","medium":"https://randomuser.me/api/portraits/med/men/75.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/75.jpg"},"nat":"IR"}],"info":{"seed":"d0b383b0c1a9bad1","results":1,"page":1,"version":"1.3"}}
    }
  
    componentDidMount() {
      //this.MyChart();
    }
  
    MyChart() {
        const data = React.useMemo(
          () => [
            {
              label: 'Series 1',
              data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
            },
            {
              label: 'Series 2',
              data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
            }
          ],
          []
        )
       
        const axes = React.useMemo(
          () => [
            { primary: true, type: 'linear', position: 'bottom' },
            { type: 'linear', position: 'left' }
          ],
          []
        )
       
        const lineChart = (
          // A react-chart hyper-responsively and continuusly fills the available
          // space of its parent element automatically
          <div
            style={{
              width: '400px',
              height: '300px'
            }}
          >
            <Chart data={data} axes={axes} />
          </div>
        )
      }
  
    render() {
      
  
      return (
        <div id="layout-content" className="layout-content-wrapper">
          <div className="panel-list"> grapg to b rebdered persons </div>
        </div>
      );
    }
}

export default Graphr;
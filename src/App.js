import React, { Component } from 'react';
import Area from './chart-types/Area';
import Bar from './chart-types/Bar';
import Column from './chart-types/Column';
import Line from './chart-types/Line';
import Donut from './chart-types/Donut';
import RadialBar from './chart-types/RadialBar';
import ChartUpdate from './ChartUpdate';

import ReactSelect from 'react-select';


const options = [
  { value: 'line', label: 'Line' },
  { value: 'area', label: 'Area' },
  { value: 'bar', label: 'bar' },
  { value: 'column', label: 'Column' },
  { value: 'radialbar', label: 'Radialbar' },
  { value: 'donut', label: 'Donut' },
  { value: 'example', label: 'example' }
];


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedChart: 'line'
    }
  }


  render() {

    return (
      <div className="app">

        <ReactSelect
          isMulti={false}
          options={options}
          value={options.filter(({ value }) => value === this.state.value)}
          getOptionLabel={({ label }) => label}
          getOptionValue={({ value }) => value}
          onChange={({ value }) => this.setState({ selectedChart: value })}
        />


        {this.state.selectedChart === 'area' ? (<Area></Area>) : null}
        {this.state.selectedChart === 'bar' ? (<Bar></Bar>) : null}
        {this.state.selectedChart === 'line' ? (<Line></Line>) : null}
        {this.state.selectedChart === 'column' ? (<Column></Column>) : null}
        {this.state.selectedChart === 'radialbar' ? (<RadialBar></RadialBar>) : null}
        {this.state.selectedChart === 'donut' ? (<Donut></Donut>) : null}
        {this.state.selectedChart === 'example' ? (<ChartUpdate></ChartUpdate>) : null}
      </div>
    );
  }
}

export default App;

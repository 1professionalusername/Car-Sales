import React from 'react';
import { connect } from 'react-redux';
import { addFeature, removeFeature } from './actions/action'
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = props => {
  const removeFeature = item => {
    props.removeFeature(item)
  };

  const addFeature = item => {
    props.addFeature(item)
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} removeFeature={removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures store={props.store} addFeature={addFeature} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

//connecting components, get our redux cookin
const mapStateToProps = state => {
  return {
    car: state.car,
    store: state.store,
    additionalPrice: state.additionalPrice
  }
}

export default connect(mapStateToProps, { addFeature, removeFeature })(App);
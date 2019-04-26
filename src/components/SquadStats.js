import React, { Component } from "react";
import { connect } from "react-redux";

class SquadStats extends Component {
  strength() {
    var strength = 0;
    var total_strength = this.props.heros.map(hero => {
      //  console.log("Strength is :", hero.strength);
      return (strength = strength + hero.strength);
    });
    //console.log("In the strength function and strenght is : ", total_strength);
    return total_strength;
  }
  render() {
    return (
      <div>
        <h4>Squad Stats</h4>
        <ul className="list-group" />
        <li className="list-group-item">
          <b>Overall strength : </b>
          {this.strength()}
        </li>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    heros: state.reducer_heros
  };
};

export default connect(mapStateToProps)(SquadStats);

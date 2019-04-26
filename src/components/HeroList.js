import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { action_deleteCharacterById } from "actions";

class HeroList extends Component {
  render() {
    return (
      <div>
        <h4>Your Hero Squad</h4>
        <ul className="list-group">
          {this.props.HeroList.map(hero => {
            return (
              <li className="list-group-item" key={hero.id}>
                <div className="list-item">{hero.name}</div>
                <div
                  className="list-item right-button"
                  onClick={() => this.props.action_deleteCharacterById(hero.id)}
                >
                  -
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ action_deleteCharacterById }, dispatch);
};

const mapStateToProps = state => {
  return {
    HeroList: state.reducer_heros
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeroList);

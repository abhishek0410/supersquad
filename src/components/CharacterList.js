import React, { Component } from "react";
import { connect } from "react-redux";
import { action_addCharacterById } from "actions";
import { bindActionCreators } from "redux";

class CharacterList extends Component {
  render() {
    console.log("Insider render method ", this.props);
    return (
      <div>
        <h4>characters</h4>

        <ul className="list-group">
          {this.props.characters.map(character => (
            <li className="list-group-item" key={character.id}>
              <div className="list-item">{character.name}</div>
              <div
                className="list-item right-button"
                onClick={() => this.props.action_addCharacterById(character.id)}
              >
                +
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("mapStateToProps : ", state);
  return {
    characters: state.reducer_character
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ action_addCharacterById }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterList);

import React, { Component } from "react";
import config from "../../config";
//import { ConditionalWrapperDrink } from "../../ConditionalWrapper";
import "./AteListItem.css";
import moment from "moment";

export default class AteListItem extends Component {
  handleClickDelete(meal_id) {
    fetch(config.API_ENDPOINT + `/meals/${meal_id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json"
      }
    })
      .then(() => {
        this.props.onDelete(meal_id);
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <div className="AteListItem">
        <section className="meal">
          {this.props.date && (
            <p>{moment(this.props.date).format("MMMM Do, YYYY")}</p>
          )}
          I went to
          {this.props.restaurantName && <h2>{this.props.restaurantName}</h2>}I
          ate {this.props.food && this.props.food},
          {/* <div className="drink">
            I drank {this.props.drink && this.props.drink}
          </div>{" "} */}
          in {this.props.city && this.props.city} and it was{" "}
          {this.props.rating && this.props.rating}
          <p> Also,{this.props.comments && this.props.comments}</p>
          <button
            className="Meal-delete"
            type="button"
            onClick={() => this.handleClickDelete(this.props.id)}
          >
            delete this nephew
          </button>
        </section>
      </div>
    );
  }
}

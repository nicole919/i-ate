import React, { Component } from "react";
import config from "../../config";
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

  renderDrink() {
    if (!this.props.drink) {
      return null;
    } else {
      return <span>I drank {this.props.drink}</span>;
    }
  }

  renderCity() {
    if (!this.props.city) {
      return null;
    } else {
      return <span>in {this.props.city}</span>;
    }
  }
  renderComments() {
    if (!this.props.comments) {
      return null;
    } else {
      return <p> Also, {this.props.comments}</p>;
    }
  }

  render() {
    return (
      <div className="AteListItem">
        <section className="meal">
          {this.props.date && (
            <p>{moment.utc(this.props.date).format("MMMM Do, YYYY")}</p>
          )}
          I went to
          {this.props.restaurantName && <h2>{this.props.restaurantName}</h2>}I
          ate {this.props.food && this.props.food}, {this.renderDrink()}
          {this.renderCity()} and it was{" "}
          {this.props.rating && this.props.rating}
          {this.renderComments()}
          <div>
            <button
              className="Meal-delete"
              type="button"
              onClick={() => this.handleClickDelete(this.props.id)}
            >
              delete
            </button>
          </div>
        </section>
        <footer></footer>
      </div>
    );
  }
}

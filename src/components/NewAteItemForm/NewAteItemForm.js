import React, { Component } from "react";
import { Textarea, Input } from "../Utils/Utils";
import config from "../../config";
import "./NewAteItemForm.css";

export default class NewItemAteForm extends Component {
  state = {
    restaurantName: "",
    food: "",
    drink: "",
    date: "",
    city: "",
    rating: "",
    comments: "",
    formValid: false,
    restaurantNameValid: false,
    foodValid: false,
    validationMessage: null
  };

  goBack = () => {
    this.props.history.goBack();
  };

  updateFormEntry(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [event.target.name]: event.target.value
    });
  }

  validateEntry(name, value) {
    let hasErrors = false;

    value = value.trim();
    if (name === "restaurantName" || name === "food") {
      if (value.length < 1) {
        hasErrors = true;
      } else {
        hasErrors = false;
      }
      this.setState(
        {
          [`${name}Valid`]: !hasErrors
        },
        this.formValid
      );
    }
  }

  formValid() {
    const { restaurantNameValid, foodValid } = this.state;
    if (restaurantNameValid && foodValid === true) {
      this.setState({
        formValid: true,
        validationMessage: null
      });
    } else {
      this.setState({
        formValid: !this.formValid,
        validtionMessage: "Please fill out required fields"
      });
    }
  }
  handleSubmit(event) {
    event.preventDefault();
    const {
      restaurantName,
      food,
      drink,
      date,
      city,
      rating,
      comments
    } = this.state;
    const meal = {
      restaurant_name: restaurantName,
      food: food,
      drink: drink,
      date_went: date,
      city: city,
      rating: rating,
      comments: comments
    };

    this.setState({ error: null });

    fetch(`${config.API_ENDPOINT}/meals`, {
      method: "POST",
      body: JSON.stringify(meal),
      headers: {
        "content-type": "application/json"
      }
    })
      .then(async res => {
        if (!res.ok) {
          const err = await res.json();
          console.log(`Error is: ${err}`);
          throw err;
        }
        return res.json();
      })
      .then(data => {
        this.goBack();
        this.context.addMeal(data);
      })
      .catch(error => {
        this.setState({ error });
      });
  }
  render() {
    return (
      <div>
        <form
          className="NewAteItemForm"
          onSubmit={event => this.handleSubmit(event)}
        >
          <div className="text">
            <div className="name">
              <label htmlFor="NewAteItemForm_where">Where {/*required*/}</label>
              <Input
                name="restaurantName"
                type="text"
                required
                id="restaurantName"
                onChange={event => this.updateFormEntry(event)}
              ></Input>
            </div>
            <div className="when">
              <label htmlFor="NewAteItemForm_when">When(MM/DD/YYYY)</label>
              <Input
                name="date"
                type="text"
                id="date"
                onChange={event => this.updateFormEntry(event)}
              ></Input>
            </div>
            <div className="food">
              <label htmlFor="NewAteItemForm_food">I ate</label>
              <Input
                name="food"
                type="text"
                id="food"
                required
                onChange={event => this.updateFormEntry(event)}
              ></Input>
            </div>
            <div className="drink">
              <label htmlFor="NewAteItemForm_drink">I drank</label>
              <Input
                name="drink"
                type="text"
                id="drink"
                onChange={event => this.updateFormEntry(event)}
              ></Input>
            </div>
            <div className="drink">
              <label htmlFor="NewAteItemForm_city">I was in (city)</label>
              <Input
                name="city"
                type="text"
                id="city"
                onChange={event => this.updateFormEntry(event)}
              ></Input>
            </div>
            <div>
              <label htmlFor="NewAteItemForm_rating">It was</label>
              <select
                value={this.state.value}
                type="text"
                name="rating"
                id="rating"
                defaultValue="good"
                onChange={event => this.updateFormEntry(event)}
              >
                <option value="bad">not good</option>
                <option value="okay">okay</option>
                <option value="good">good</option>
                <option value="best">amazing</option>
              </select>
            </div>
            <div className="comments">
              <label htmlFor="NewAteItemForm_comments">Additional notes</label>
              <Textarea
                name="comments"
                type="text"
                id="comments"
                onChange={event => this.updateFormEntry(event)}
              ></Textarea>
            </div>
            <button type="submit" className="button">
              Save
            </button>
          </div>
        </form>
      </div>
    );
  }
}

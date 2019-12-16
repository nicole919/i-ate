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
    rating: "good.",
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
      <>
        <h1 className="NewAteItemFormHeader">new entry</h1>
        <div className="FormContainer">
          <form
            className="NewAteItemForm"
            onSubmit={event => this.handleSubmit(event)}
          >
            <div className="text">
              <div className="name">
                <Input
                  className="input"
                  name="restaurantName"
                  type="text"
                  required
                  id="restaurantName"
                  placeholder="where"
                  onChange={event => this.updateFormEntry(event)}
                ></Input>
              </div>
              <div className="when">
                <Input
                  className="input"
                  name="date"
                  type="date"
                  id="date"
                  onChange={event => this.updateFormEntry(event)}
                ></Input>
              </div>
              <div className="food">
                <Input
                  className="input"
                  name="food"
                  type="text"
                  id="food"
                  placeholder="what did you eat?"
                  required
                  onChange={event => this.updateFormEntry(event)}
                ></Input>
              </div>
              <div className="drink">
                <Input
                  className="input"
                  name="drink"
                  type="text"
                  id="drink"
                  placeholder="what did you drink?"
                  onChange={event => this.updateFormEntry(event)}
                ></Input>
              </div>
              <div className="drink">
                <Input
                  className="input"
                  name="city"
                  type="text"
                  id="city"
                  placeholder="where were you? (city)"
                  onChange={event => this.updateFormEntry(event)}
                ></Input>
              </div>
              <div>
                <select
                  className="input"
                  name="rating"
                  id="rating"
                  onChange={event => this.updateFormEntry(event)}
                >
                  <option value="not good.">it was not good</option>
                  <option value="okay.">it was okay</option>
                  <option value="good." selected>
                    it was good!
                  </option>
                  <option value="the best!">the best!</option>
                </select>
              </div>
              <div className="comments">
                <Textarea
                  className="input"
                  name="comments"
                  type="text"
                  id="comments"
                  placeholder="additional thoughts"
                  onChange={event => this.updateFormEntry(event)}
                ></Textarea>
              </div>
              <button type="submit" className="button">
                Save
              </button>
            </div>
          </form>
          <footer></footer>
        </div>
      </>
    );
  }
}

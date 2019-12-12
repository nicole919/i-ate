import React, { Component } from "react";
import AteListItem from "../AteListItem/AteListItem";
import ApiContext from "../../ApiContext";
import config from "../../config";
import "./AteList.css";

export default class AteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meals: []
    };
  }
  static defaultProps = {
    onDeleteMeal: () => {}
  };

  static contextType = ApiContext;

  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/meals`)
      .then(res => res.json())
      .then(meals => {
        this.setState({ meals });
      })
      .catch(error => {
        console.error({ error });
      });
  }
  onMealDeleted = mealId => {
    const newMeals = this.state.meals.filter(meal => {
      return meal.id !== mealId;
    });
    this.setState({ meals: newMeals });
  };
  render() {
    return (
      <div className="AteList">
        <h1 className="AteList_header">i.ate</h1>
        <ul>
          {this.state.meals.map(meal => (
            <li key={meal.id}>
              <AteListItem
                id={meal.id}
                restaurantName={meal.restaurant_name}
                food={meal.food}
                drink={meal.drink}
                date={meal.date_went}
                city={meal.city}
                rating={meal.rating}
                comments={meal.comments}
                onDelete={this.onMealDeleted}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

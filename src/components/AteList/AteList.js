import React, { Component } from "react";
import AteListItem from "../AteListItem/AteListItem";
import ApiContext from "../../ApiContext";
import config from "../../config";
import SearchBar from "../SearchBar";
import "./AteList.css";

export default class AteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meals: [],
      filteredMeals: []
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
        this.setState({ meals, filteredMeals: meals });
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
  onSearchChange = searchQuery => {
    const newMeals = this.state.meals.filter(meal => {
      const mealString = JSON.stringify(meal)
        .trim()
        .toLowerCase();
      return mealString.includes(searchQuery.trim().toLowerCase());
    });
    this.setState({ filteredMeals: newMeals });
  };
  render() {
    return (
      <div className="AteList">
        <SearchBar onChange={this.onSearchChange} />
        <ul>
          {this.state.filteredMeals.map(meal => (
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

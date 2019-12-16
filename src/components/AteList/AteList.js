import React, { Component } from "react";
import AteListItem from "../AteListItem/AteListItem";
import ApiContext from "../../ApiContext";
import Loader from "react-loader";
import config from "../../config";
import SearchBar from "../SearchBar/SearchBar";
import "./AteList.css";

export default class AteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meals: [],
      filteredMeals: [],
      loaded: false
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
        this.setState({ meals, filteredMeals: meals, loaded: true });
      })
      .catch(error => {
        console.error({ error });
      });
  }

  onMealDeleted = mealId => {
    const newMeals = this.state.meals.filter(meal => {
      return meal.id !== mealId;
    });
    this.setState({ meals: newMeals }, () => {
      this.filterMeals("");
    });
  };
  onSearchChange = searchQuery => {
    this.filterMeals(searchQuery);
  };

  filterMeals = searchQuery => {
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
        <div className="AteListBanner">
          <h1 className="AteListHeader">entries</h1>
          <SearchBar onChange={this.onSearchChange} />
        </div>
        <Loader loaded={this.state.loaded}>
          <ul>
            {this.state.filteredMeals.map(meal => (
              <li className="listItemContainer" key={meal.id}>
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
        </Loader>
      </div>
    );
  }
}

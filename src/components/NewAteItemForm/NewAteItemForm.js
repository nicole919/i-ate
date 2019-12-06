import React, { Component } from "react";
import { Button, Textarea, Input, Required } from "../Utils/Utils";
import { Link } from "react-router-dom";
import ApiContext from "../../ApiContext";
import config from "../../config";
import "./NewAteItemForm.css";

export default class NewItemAteForm extends Component {
  render() {
    return (
      <div>
        <form className="NewAteItemForm">
          <div className="text">
            <div className="name">
              <label htmlFor="NewAteItemForm_where">Where {/*required*/}</label>
              <Input
                name="where"
                type="text"
                //required
                id="NewAteItemForm_where"
              ></Input>
            </div>
            <div className="when">
              <label htmlFor="NewAteItemForm_when">When</label>
              <Input name="when" type="text" id="NewAteItemForm_when"></Input>
            </div>
            <div className="food">
              <label htmlFor="NewAteItemForm_food">I ate</label>
              <Input name="food" type="text" id="NewAteItemForm_food"></Input>
            </div>
            <div className="drink">
              <label htmlFor="NewAteItemForm_drink">I drank</label>
              <Input name="drink" type="text" id="NewAteItemForm_drink"></Input>
            </div>
            <div className="drink">
              <label htmlFor="NewAteItemForm_city">I was in (city)</label>
              <Input name="city" type="text" id="NewAteItemForm_city"></Input>
            </div>
            <div>
              <label htmlFor="NewAteItemForm_rating">Rating</label>
              <input
                type="text"
                name="rating"
                id="rating"
                defaultValue="3"
                min="1"
                max="5"
              />
            </div>
            <div className="comments">
              <label htmlFor="NewAteItemForm_comments">Additional notes</label>
              <Textarea
                name="comments"
                type="text"
                id="NewAteItemForm_comments"
              ></Textarea>
            </div>
            <Link to="/AteListItem">Login</Link>
            {/* <Button type="submit">Save</Button> */}
          </div>
        </form>
      </div>
    );
  }
}

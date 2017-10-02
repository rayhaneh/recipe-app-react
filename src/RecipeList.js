import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Recipe from './Recipe'
import './RecipeList.css'

class RecipeList extends Component {

  static propType = {
    recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDelete: PropTypes.func.isRequired
  }

  render () {
    const { onDelete } = this.props;
    const recipes = this.props.recipes.map(recipe => (
      <Recipe key={recipe.id} {...recipe} onDelete={onDelete}/>
    ))
    return (
      <div className={'recipe-list'}>
        {recipes}
      </div>
    )
  }
}

export default RecipeList
import React from 'react'



class Note  extends React.Component
{
  constructor(props)
  {
    super(props)
    this.edit = this.edit.bind(this)
    this.remove = this.remove.bind(this)
  }
  edit()
  {
    alert("Editing Note")
  }
  remove()
  {
    alert("Removing Note")
  }
  render()
  {
    return(
      <div className='note'>
      <p>Learn React</p>
      <span>
      <button id='edit' onClick={this.edit} > Edit</button>
      <button id='remove' onClick={this.remove} > Remove</button>
      </span>
      </div>
    )
  }
}

export default Note

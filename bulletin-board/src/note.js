import React from 'react'



class Note  extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state = {
      editing:false
    }
    this.edit = this.edit.bind(this)
    this.remove = this.remove.bind(this)
    this.renderForm = this.renderForm.bind(this)
    this.renderDisplay=this.renderDisplay.bind(this)
    this.save=this.save.bind(this)
  }
  edit()
  {
    this.setState({
        editing:true
    })
  }
  remove()
  {
    alert("Removing Note")
  }

  save()
  {
    alert("saved!!!")
  }

  renderForm()
  {
    return(
      <div className="note">
        <form>
          <textarea/>
          <button id="save" onClick={this.save}>Save</button>
        </form>
      </div>
    )
  }
  renderDisplay()
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
  render()
  {
    if(this.state.editing)
    {
    return this.renderForm()
    }
    else {
      return this.renderDisplay()
    }
  }

}

export default Note

import React from 'react'
import { Link } from 'react-router-dom'
import './UserForm.css'

const UserForm = ({onNameChange, onSubmit, onEmploymentChange, onIncomeChange}) => {
  return(
    <form className="form br2 ba dark-gray b--black-10 bg-washed-green shadow-2 w-100 w-50-m w-25-l mw5 center" data-testid = "user-form">
    <main className="pa4 black-80">
      <div className="measure center">
        <fieldset className="ba b--transparent ph0 mh0">
          <legend className="f4 fw6 ph0 mh0">Welcome! 👋 <br />Insert your data for checking your credit availability</legend>
          <div className="mt3">
            <label className="db fw6 lh-copy f6" >Name</label>
            <input className="pa2 input-reset ba bg-transparent hover-bg-light-green hover-black w-100" type="text" 
              aria-label="name"
              onChange={onNameChange}/>
          </div>
          <div className="mt3">
            <label className="db fw6 lh-copy f6">Type of Employment</label>
            <select className = "pa1  ba bg-transparent hover-bg-light-green hover-black w-100"
              aria-label="employment"
              defaultValue={'Select'}
              onChange={onEmploymentChange}>
              <option value="Select" disabled hidden>Select</option>
              <option value="full-time">Full-Time</option>
              <option value="part-time">Part-Time</option>
              <option value="student">Student</option>
            </select>
          </div>
          <div className="mt3">
            <label className="db fw6 lh-copy f6" >Annual Income</label>
            <input className="pa2 input-reset ba bg-transparent hover-bg-light-green hover-black w-100" type="text"
              aria-label="income"
              onChange={onIncomeChange}/>
          </div>
        </fieldset>
        <div className="tc lh-copy mt3">
            <Link to='/cards'>
              <p className="f6 link dim black db pointer"
              onClick= {onSubmit}
              > Submit</p>
            </Link>
        </div>
      </div>
    </main>
  </form>
  )
}

export default UserForm
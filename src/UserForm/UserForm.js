import React from 'react'
import { Link } from 'react-router-dom'

const UserForm = ({onNameChange, onSubmit, onEmploymentChange, onIncomeChange}) => {
  return(
    <article className="br2 ba dark-gray b--black-10 shadow-2 mv4 w-100 w-50-m w-25-l mw5 center" data-testid = "user-form">
    <main className="pa4 black-80">
      <div className="measure center">
        <fieldset className="ba b--transparent ph0 mh0">
          <legend className="f4 fw6 ph0 mh0">Insert your data for checking your credit availability</legend>
          <div className="mt3">
            <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
            <input className="pa2 input-reset ba bg-transparent hover-bg-light-green hover-black w-100" type="text" id="user-name"
              onChange={onNameChange}/>
          </div>
          <div className="mt3">
            <label className="db fw6 lh-copy f6" htmlFor="employment-type">Type of Employment</label>
            <select name="cars" id="cars" className = "pa1  ba bg-transparent hover-bg-light-green hover-black w-100"
              onChange={onEmploymentChange}>
              <option value="" selected disabled hidden>Select</option>
              <option value="full-time">Full-Time</option>
              <option value="part-time">Part-Time</option>
              <option value="student">Student</option>
            </select>
          </div>
          <div className="mt3">
            <label className="db fw6 lh-copy f6" htmlFor="annual-income">Annual Income</label>
            <input className="pa2 input-reset ba bg-transparent hover-bg-light-green hover-black w-100" type="text" id="user-income"
              onChange={onIncomeChange}/>
          </div>
        </fieldset>
        <div className="tc lh-copy mt3">
        <Link to='/cards'>

          <a
            className="f6 link dim black db pointer"
            onClick= {onSubmit}
            > Submit</a>
        </Link>
        </div>
      </div>
    </main>
  </article>
  )
}

export default UserForm
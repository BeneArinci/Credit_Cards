import React from 'react'

const UserForm = () => {
  return(
    <article className="br2 ba dark-gray b--black-10 shadow-2 mv4 w-100 w-50-m w-25-l mw6 center" data-testid = "user-form">
    <main className="pa4 black-80">
      <div className="measure center">
        <fieldset className="ba b--transparent ph0 mh0">
          <legend className="f4 fw6 ph0 mh0">Insert your data for checking your credit availability</legend>
          <div className="mt3">
            <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
            <input className="pa2 input-reset ba bg-transparent hover-bg-light-green hover-black w-100" type="text" id="user-name"/>
          </div>
          <div className="mt3">
            <label className="db fw6 lh-copy f6" htmlFor="employment-type">Type of Employment</label>
            <select name="cars" id="cars" className = "pa2  ba bg-transparent hover-bg-light-green hover-black w-100">
              <option value="" selected disabled hidden>Select</option>
              <option value="full-time">Full-Time</option>
              <option value="part-time">Part-Time</option>
              <option value="student">Student</option>
            </select>
          </div>
          <div className="mt3">
            <label className="db fw6 lh-copy f6" htmlFor="annual-income">Annual Income</label>
            <input className="pa2 input-reset ba bg-transparent hover-bg-light-green hover-black w-100" type="text" id="user-income"/>
          </div>
        </fieldset>
        <div className="tc lh-copy mt3">
          <p
            href="#0" 
            className="f6 link dim black db pointer"
            > Submit</p>
        </div>
      </div>
    </main>
  </article>
  )
}

export default UserForm
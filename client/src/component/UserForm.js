/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'


const UserForm = ({
  handle,
  handleSubmit,
  Next = 'Next',
}) => {
  console.log('Submitted')
  const [date, setDate] = useState({
    day: false,
    month: false,
    year: false
  })

  const handleDate = (event) => {
    const newFormData = { ...date, [event.target.name]: event.target.value }
    setDate(newFormData)
    console.log('DATA', newFormData)
  }

  useEffect(() => {
    if (date.day && date.month && date.year) {
      console.log('Hello')
      handle('dateOfBirth', `${date.day}/${date.month}/${date.year}`)
    }
  }, [date.day, date.month, date.year])

  return (
    <section>
      <div className="container">
        <form
          className="column"
          onSubmit={handleSubmit}
        >
          <div className="content">
            <div className="panel-group" id="accordion">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a data-toggle="collapse" data-parent="#accordion" href="#collapse1" >
                    Step 1: Your details</a>
                </h4>
              </div>
              <div id="collapse1" className="panel-collapse collapse in">
                <div className="panel-body">
                  <div className="details1">
                  <div className="names">
                    <div className="fname">
                      <label className="label label-fname" htmlFor="fname">First Name</label>
                      <input onChange={(event) => handle(event.target.name, event.target.value)}
                        className="input input-fname" type="text" id="fname" name="firstName"
                      />
                    </div>
                    <div>
                      <label className="label label-sname" htmlFor="sname">Surname</label>
                      <input onChange={(event) => handle(event.target.name, event.target.value)}
                        className="input input-sname" type="text" id="sname" name="surname"
                      />
                    </div>
                  </div>
                  <div className="email">
                    <label className="label label-email" htmlFor="email">Email Address:</label>
                    <input onChange={(event) => handle(event.target.name, event.target.value)}
                      className="input" type="text" id="email" name="email"
                    />
                  </div>

                  <div className="next">
                    <label className="label label-next" htmlFor="next" data-toggle="collapse" data-parent="#accordion" href="#collapse2">Next {'>'}</label>
                  </div>
                </div>
                </div>
              </div>
            </div>
            <div className="panel-group" id="accordion">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">
                    Step 2: More comments </a>
                </h4>
              </div>
              <div id="collapse2" className="panel-collapse collapse">
                <div className="panel-body">
                  <div className="details2">
                    <div className="names">
                      <div className="tel">
                        <label className="label label-tel" htmlFor="tel">Telephone Number</label>
                        <input onChange={(event) => handle(event.target.name, event.target.value)}
                          className="input input-tel" type="text" id="telephone" name="telephone"
                        />
                      </div>
                      <div className="names">
                        <label className="label label-gender" htmlFor="gender">Gender</label>
                        <select name="gender" id="gender"
                          onChange={(event) => handle(event.target.name, event.target.value)}
                        >
                          <option value="select gender">Select Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="others">Others</option>
                        </select>
                      </div>
                    </div>
                    <div className="date">
                      <label className="label label-dob" htmlFor="date of birth"
                      >Date of birth</label>
                      <div className="date">
                        <input onChange={handleDate}
                          className="input" type="text" id="date" name="day" />
                        <input onChange={handleDate}
                          className="input" type="text" id="date" name="month" />
                        <input onChange={handleDate}
                          className="input" type="text" id="date" name="year" />
                      </div>
                    </div>
                    <div className="next">
                      <label className="label label-next" htmlFor="next" data-toggle="collapse" data-parent="#accordion" href="#collapse3">Next {'>'} </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="panel-group" id="accordion">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a data-toggle="collapse" data-parent="#accordion" href="#collapse3">
                    Step 3: Final comments</a>
                </h4>
              </div>
              <div id="collapse3" className="panel-collapse collapse">
                <div className="panel-body">
                  <div className="details3">
                    <div className="comments">
                      <div className="fcomment">
                        <label className="label label-comment" htmlFor="comment">Comments</label>
                        <textarea onChange={(event) => handle(event.target.name, event.target.value)}
                          className="comment-comment"  id="fcomment" name="comment"
                        />
                      </div>
                      <div className="next">
                        <Button type="submit" className="label label-next" htmlFor="next" onClick={handleSubmit}>{Next} {'>'} </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default UserForm
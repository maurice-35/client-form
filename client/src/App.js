import React, { useState, useEffect } from 'react'
import axios from 'axios'



const App = () => {
  const [userInfo, setUserInfo] = useState({

  })



  useEffect(() => {
    console.log('USE')
    const getData = async () => {
      console.log('Try')
      try {
        const { data } = await axios.get('/api/users')
        setUserInfo(data)
        console.log('DATA', data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])


  return (
    <section>
      <div className="container"><br />
        <form
          className="column"
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
                <div class="panel-body"><div className="details">
                  <div className="names">
                    <div className="fname">
                      <label className="label label-fname" for="fname">First Name</label>
                      <input className="input input-fname" type="text" id="fname" name="fname"
                        value={userInfo.firstName}
                      />
                    </div>
                    <div>
                      <label className="label label-sname" for="sname">Surname</label>
                      <input className="input input-sname" type="text" id="sname" name="sname"
                        value={userInfo.surname}
                      />
                    </div>
                  </div>
                  <div class="email">
                    <label className="label label-email" for="email">Email Address:</label>
                    <input className="input" type="text" id="email" name="email"
                      value={userInfo.email}
                    />
                  </div>
                  <div className="next">
                    <label className="label label-next" for="next">Next {'>'} </label>
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
                <div className="panel-body"><div className="details">
                  <div className="names">
                    <div className="tel">
                      <label className="label label-tel" for="tel">Telephone Number</label>
                      <input className="input input-tel" type="text" id="telephone" name="tel"
                        value={userInfo.telephone}
                      />
                    </div>
                    <div className="names">
                    <label className="label label-gender" for="gender">Gender</label>
                      <select name="gender" id="gender"
                      >
                        <option value="male">Select Gender</option>
                        <option value="female">Male</option>
                        <option value="female">Female</option>
                        <option value="female">Others</option>
                      </select>
                    </div>
                  </div>
                  <div className="date">
                    <label className="label label-dob" for="date of birth"
                      value={userInfo.dateOfBirth}
                    >Date of birth</label>
                    <div className="date">
                      <input className="input" type="text" id="date" name="date of birth" />
                      <input className="input" type="text" id="date" name="date of birth" />
                      <input className="input" type="text" id="date" name="date of birth" />
                    </div>
                  </div>
                  <div className="next">
                    <label className="label label-next" for="next">Next {'>'} </label>
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
                  <div className="details">
                    <div className="comments">
                      <div className="fcomment">
                        <label className="label label-comment" for="comment">Comments</label>
                        <input className="comment-comment" type="textarea" id="fcomment" name="fcomment"
                          value={userInfo.comments}
                          
                        />
                      </div>
                      <div className="next">
                        <label className="label label-next" for="next">Next {'>'} </label>
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

export default App

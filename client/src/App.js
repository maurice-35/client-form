import React, { useState, useEffect } from 'react'
import axios from 'axios'



const App = () => {
  const [user, setUser] = useState([])



  useEffect(() => {
    console.log('USE')
    const getData = async () => {
      console.log('Try')
      try {
        const { data } = await axios.get('/api/users')
        setUser(data)
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
        <button type="button" class="btn btn-info" data-toggle="collapse" data-target="#demo">Step 1: Your details</button>
        <div id="demo" class="collapse">
          <div className="details">
            <div class="names">
              <div className="fname">
                <label class="label label-fname" for="fname">First Name</label>
                <input class="input input-fname" type="text" id="fname" name="fname" />
              </div>
              <div>
                <label class="label label-sname" for="sname">Surname</label>
                <input class="input input-sname" type="text" id="sname" name="sname" />
              </div>
            </div>
            <div class="email">
              <label class="label" for="email">Email Address:</label>
              <input class="input" type="text" id="email" name="email" />
            </div>
            <div className="next">
              <label class="label label-next" for="next">Next {'>'} </label>
            </div>
          </div>
        </div>
        <button type="button" class="btn btn-info" data-toggle="collapse" data-target="#demo">Step 2: More details</button>
        <div id="demo" class="collapse">
          <div className="fname">
            <label class="label label-fname" for="fname">First Name</label>
            <input class="input input-fname" type="text" id="fname" name="fname" />
          </div>
        </div>
      </div>
    </section>
  )

}

export default App

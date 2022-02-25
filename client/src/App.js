import React, { useState, useEffect } from 'react'
import axios from 'axios'


const App = () => {
  const [user, setUser] = useState([])
  // const [modalShow, setModalShow] = React.useState(false);


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
        <div className="details">
          <div class="names">
            <div>
              <label class="label label-fname" for="fname">First Name</label><br />
              <input class="input input-fname" type="text" id="fname" name="fname" />
            </div>
            <div>
              <label class="label label-sname" for="sname">Surname</label><br />
              <input class="input input-sname" type="text" id="sname" name="sname" />
            </div>
          </div>
          <div class="email">
            <label class="label" for="email">Email Address:</label><br />
            <input class="input" type="text" id="email" name="email" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default App

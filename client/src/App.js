import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import { Popover, Button, Overlay } from 'react-bootstrap'


const App = () => {
  const [user, setUser] = useState([])
  // const [modalShow, setModalShow] = React.useState(false);
  // const [show, setShow] = useState(false);
  // const [target, setTarget] = useState(null);
  // const ref = useRef(null);


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

  // const handleClick = (event) => {
  //   setShow(!show);
  //   setTarget(event.target);
  // };


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


  // const MyVerticallyCenteredModal = (props) => {
  //   return (
  //     <Modal
  //       {...props}
  //       size="md" width="1"
  //       aria-labelledby="contained-modal-title-vcenter"
  //       centered
  //     >
  //       <Modal.Header closeButton>
  //         <Modal.Title id="contained-modal-title-vcenter">
  //           Modal heading
  //         </Modal.Title>
  //       </Modal.Header>
  //       <Modal.Body>
  //         <h4>Centered Modal</h4>
  //         <p>
  //           Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
  //           dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
  //           consectetur ac, vestibulum at eros.
  //         </p>
  //       </Modal.Body>
  //       <Modal.Footer>
  //         <Button onClick={props.onHide}>Close</Button>
  //       </Modal.Footer>
  //     </Modal>
  //   );
  // }


  // return (
  //   <>
  //     <div>
  //       <Button variant="primary" onClick={() => setModalShow(true)}>
  //         Launch vertically centered modal
  //       </Button>

  //       <MyVerticallyCenteredModal
  //         show={modalShow}
  //         onHide={() => setModalShow(false)}
  //       />
  //     </div><br />
  //     <div>
  //       <Button variant="primary" onClick={() => setModalShow(true)}>
  //         Launch vertically centered modal
  //       </Button>

  //       <MyVerticallyCenteredModal
  //         show={modalShow}
  //         onHide={() => setModalShow(false)}
  //       />
  //     </div>
  //   </>
  // )
}

export default App

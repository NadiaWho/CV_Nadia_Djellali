import React from 'react'
import { Col } from 'react-bootstrap'

const UploadCv = () => {
  return (
    <div className='upload-cv'>
    <Col xsHidden={true}
         sm={1} smOffset={2}
         md={1} mdOffset={2}
         lg={1} lgOffset={2}>
      <div className="btn-default" id='box-button'> C.V version papier</div>
    </Col>
    </div>
  )
}

export default UploadCv

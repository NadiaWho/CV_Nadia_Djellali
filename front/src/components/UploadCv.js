import React from 'react'
import { Col } from 'react-bootstrap'
import pdf from '../NadiaCV.pdf'

const UploadCv = () => {
  return (
    <div className='upload-cv'>
      <Col xsHidden={true}
        sm={1} smOffset={2}
        md={1} mdOffset={2}
        lg={1} lgOffset={2}>
        <div className="btn-default" id='box-button'>
          <a href={ pdf } download="mon_cv">
            <h5> Télécharger la version papier</h5>
        </a>
        </div>
      </Col>
    </div>
  )
}

export default UploadCv

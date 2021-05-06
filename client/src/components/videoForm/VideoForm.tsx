import React from 'react'

const VideoForm = () => {
  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="card">
          <div className="card-body">
            <h3>New Video</h3>
            <form action="">
              <div style={{margin: '20px 10px'}}>
                <input
                  type="text"
                  name="title"
                  placeholder="Please input a title"
                  className="form-control"
                  autoFocus
                />
              </div>
              <div style={{margin: '20px 10px'}}>
                <input
                  type="text"
                  name="url"
                  placeholder="...someWeb.com"
                  className="form-control"
                />
              </div>
              <div style={{margin: '20px 10px'}}>
                <textarea
                  name="Description"
                  rows={3}
                  className="form-control"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
export default VideoForm;
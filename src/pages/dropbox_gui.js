import React, { useState } from 'react';
import DropboxChooser from 'react-dropbox-chooser';

const FOLDER_PATH = '/TEA2023/';
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;

function DropboxData({ ID }) {
  function handleSuccess (files){
    console.log(files);
  }

  return (
    <div className="app">
      <h3 style={{textAlign:"center"}}>Welcome to the Tea2023 data sharing platform</h3>
      <br/> <br/>
      <div>
        <DropboxChooser appKey={CLIENT_ID}
          success={handleSuccess}
          cancel={()=> console.log("closed")}
          linkType="direct"
          extensions={['.pdf', '.ppt', '.traj', '.png', '.jpeg', '.doc', '.docx', '.db', '.txt', '.md']}
          multiselect={true}
          folderPath={FOLDER_PATH}
        >
        </DropboxChooser>
      </div>
            <script type="text/javascript" src="https://www.dropbox.com/static/api/2/dropins.js" id="dropboxjs" data-app-key="c0mpqunklb6vt5s"></script>
    </div>
  )
}

export default DropboxData;

import React, { useState } from 'react';
import DropboxChooser from 'react-dropbox-chooser';

const FOLDER_PATH = '/TEA2023/TEST/';
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;

function DropboxData() {
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
          extensions={['.pdf', '.doc', '.docx', '.txt', '.md']}
          multiselect={true}
          folderPath={FOLDER_PATH}
        >
        </DropboxChooser>
      </div>
    </div>
  )
}

export default DropboxData;

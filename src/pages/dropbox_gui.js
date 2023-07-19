import { Dropbox } from 'dropbox';
import React, { useState } from 'react';
import DropboxChooser from 'react-dropbox-chooser';

const FOLDER_PATH = '/TEA2023/';
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;

function DropboxData({ ID }) {
  const [files, setFiles] = useState([]);

  function handleSuccess (files){
    console.log(files);
  }

  function handleDownload (file) {
    const drops = new Dropbox.Dropbox({ accessToken : process.env.CLIENT_ID});
    drops.filesGetTemporaryLink({ path : file.path_display})
      .then(response => {
        const download_url = response.link;
        window.open(download_url);
      })
      .catch(error => {
        console.error("Ha! Ha! Download failed! Ha! Ha!", error);
      });
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
      {files.map(file => (
        <div key={file.id}>
          <span>{file.name}</span>
          <button onClick={() => handleDownload(file)}>DOWNLOAD!</button>
          </div>
      ))}
    </div>
  )
}

export default DropboxData;

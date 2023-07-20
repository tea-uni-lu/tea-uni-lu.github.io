import { Dropbox } from 'dropbox';
import React, { useState, useRef } from 'react';
import DropboxChooser from 'react-dropbox-chooser';

const FOLDER_PATH = '/TEA2023/';
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;

function DropboxData({ ID }) {
  const [files, setFiles] = useState([]);
  const dropboxChooserRef = useRef(null);

  function handleSuccess (files){
    console.log(files);
  }

  function handleDownload (file) {
    const drops = new Dropbox.Dropbox({ accessToken : process.env.REACT_APP_CLIENT_ID});
    drops.filesGetTemporaryLink({ path : file.path_display})
      .then(response => {
        const download_url = response.link;
        window.open(download_url);
      })
      .catch(error => {
        console.error("Ha! Ha! Download failed! Ha! Ha!", error);
      });
  }

  function openDropboxChooser () {
    dropboxChooserRef.current.dispatchEvent(new MouseEvent('click'));
  }

  return (
    <div className="app">
      <h3 style={{textAlign:"center"}}>Welcome to the Tea2023 data sharing platform</h3>
      <br/> <br/>
      <a href="https://www.dropbox.com/scl/fo/7p4jdakp5fwj0l2lr4rjk/h?rlkey=lf8gb2okieflvu3xo2w62ufrw&dl=0" target='blank' rel='noopener noreferrer'>
        <button style={{ color: "#3f51b5"}}>Click here to access the Dropbox folder</button>
      </a>        
    </div>
  )
}

export default DropboxData;

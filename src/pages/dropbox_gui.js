import React, { useEffect, useState } from 'react';
import { Dropbox } from 'dropbox';
import { RiDownloadCloudLine, RiUploadCloudLine } from 'react-icons/ri';

const CLIENT_ID = 'c0mpqunklb6vt5s';
const CLIENT_SECRET = 'bfyvai1f20zz5ry';
const REDIRECT_URI = 'localhost:3000/data_page';
const ACCESS_TOKEN = 'sl.BiSW_RjCv_OJWxhCQX2HXmNqFfdvzV1UD13JompK5Z2hJ4RlVD4nSqykul2OOCFvDLPELARggufWC7Vl3AS5eAV1bHscrxzbd5_bdicAI_Jl-pdJZYX11KQ7sPjKHvW2b0wFHr0';
const FOLDER_PATH = '/TEA2023/TEST/'

const dropbox = new Dropbox({ clientId: CLIENT_ID, clientSecret: CLIENT_SECRET, accessToken: ACCESS_TOKEN});


function DropboxGUI() {
  const [folderContent, setFolderContent] = useState([]);

    const fetchFolderContent = async () => {
      try {
        const { result } = await dropbox.filesListFolder({ path: FOLDER_PATH });
        setFolderContent(result.entries);
      } catch (error) {
        console.error('Error fetching folder content:', error);
      }
    };

  useEffect(() => {
    fetchFolderContent();
  }, []);

  const handleDownload = (path) => {
    const downloadFile = async () => {
      try {
        const response = await dropbox.filesDownload({ path });
        const downloadUrl = URL.createObjectURL(response.result.fileBlob);
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = response.result.name;
        link.click();
      } catch (error) {
        console.error('Error downloading file:', error);
      }
    };

    downloadFile();
  };

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = async (event) => {
        const contents = event.target.result;
        const originalFileName = file.name;
        const uniquePath = await generateUniquePath(FOLDER_PATH, originalFileName);
  
        try {
          await dropbox.filesUpload({
            path: uniquePath,
            contents: contents,
            mode: { '.tag': 'add' },
            autorename: false,
          });
          console.log('File uploaded successfully!');
          fetchFolderContent();
        } catch (error) {
          console.error('Error uploading file:', error);
          if (error.response && error.response.status === 400) {
            console.log('Error details:', error.response.data);
          }
        }
      };
  
      reader.readAsArrayBuffer(file);
    }
  };
  
  
  const generateUniquePath = async (basePath, fileName, timestamp = Date.now()) => {
    const newPath = `${basePath}/${timestamp}_${fileName}`;
    try {
      await dropbox.filesGetMetadata({ path: newPath });
      // If metadata is found, it means the path already exists, so recursively call the function
      return generateUniquePath(basePath, fileName, timestamp + 1);
    } catch (error) {
      // If metadata is not found, it means the path is unique, so return the path
      return newPath;
    }
  };
  
  
  return (
    <div>
      <h2>Welcome to the TEA2023 data sharing platform!</h2>
      {folderContent.length > 0 ? (
        <div>
          <h4>Contents of the Dropbox Folder:</h4>
          <ul>
            {folderContent.map((item) => (
              <li key={item.id}>
              {item.name}{' '}
                <a
                  href="#"
                  onClick={() => handleDownload(item.path_lower)}
                >
                  <RiDownloadCloudLine />
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No content in the folder.</p>
      )}
      <div>
        <h4>Upload to the Dropbox Folder:</h4>
        <input type="file" onChange={handleUpload} />
        <label htmlFor="file-upload">
          <RiUploadCloudLine /> Upload File {/* Add the upload icon */}
        </label>
      </div>
    </div>
  );
};

export default DropboxGUI;
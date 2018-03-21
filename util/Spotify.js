import React from 'react';

let accessToken;
let expiresIn;

const redirect = 'http://localhost:3000/';
const clientID = '0154d69ff48549b98a2138d12f96c58b'; // Spotify API client id
const secret = '8fe7b5e25d36439c9ea3b38eedfe5a00'// Spotify API client secret

class Spotify extends React.Component {


  // Retrieves the user access token from Spotify
  getAccessToken() {
    if (accessToken) { // Checks for existing token
      return accessToken;
    }

    const url = window.location.href;

    accessToken = url.match(/access_token=([^&]*)/); // Sources the access token
    expiresIn = url.match(/expires_in=([^&]*)/); // Sources the expiration timer

    window.setTimeout(() => accessToken = '', expiresIn * 1000); // Clears the url and expiration from the URL
    window.history.pushState('Access Token', null, '/');
  }
}

export default Spotify;

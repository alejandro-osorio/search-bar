import axios from 'axios';

class Gateway {
  constructor() {
    let sandbox = ('; ' + document.cookie).split('; vtex_sandbox=').pop().split(';').shift();
    let workspace = ('; ' + document.cookie).split('; vtex_workspace=').pop().split(';').shift();
    let token = ('; ' + document.cookie).split('; VtexIdclientAutCookie=').pop().split(';').shift();

    this.defaultHeaders = {
      'Authorization': `token ${token}`,
      'x-vtex-sandbox': sandbox,
      'x-vtex-workspace': workspace ? workspace : 'master'
    };

    this.SearchResource = '/_resources/search@alphateam.search-bar/';
  }

  loadProducts(searchTerm) {
    axios.get(this.SearchResource, {
      headers: this.defaultHeaders
    }).then(function (response) {
      console.log(response);
      return response;
    });
  }
}

export default new Gateway();

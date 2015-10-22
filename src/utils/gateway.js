import axios from 'axios';

class gateway {
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

    loadProducts(searchTerm, callback) {
        return axios.get(this.SearchResource, {
            headers: this.defaultHeaders
        });
    }
}

export default
class gateway {
    constructor() {
        let token = ('; ' + document.cookie).split('; VtexIdclientAutCookie=').pop().split(';').shift();
        let workspace = ('; ' + document.cookie).split('; vtex_workspace=').pop().split(';').shift();
        let sandbox = ('; ' + document.cookie).split('; vtex_sandbox=').pop().split(';').shift();

        this.defaultHeaders = {
            'Authorization': `token ${token}`,
            'x-vtex-sandbox': sandbox,
            'x-vtex-workspace': workspace ? workspace : 'master'
        };

        this.productResource = '/_resources/product@vtex.storefront-sdk/';
        this.productsResource = '/_resources/products@vtex.storefront-sdk/';
    }

    products(params) {
        params = omit(params, ['$id']);

        if (params.product) {
            return axios.get(this.productResource, {
                params,
                headers: this.defaultHeaders
            });
        }

        return axios.get(this.productsResource, {
            params,
            headers: this.defaultHeaders
        });
    }

    facets(params) {
        params = omit(params, ['$id']);

        const url = this.productsResource + '/facets';

        return axios.get(url, {
            params,
            headers: this.defaultHeaders
        });
    }

    categories(params) {
        params = omit(params, ['$id']);

        const categoryId = params.category ? params.category : '';
        const url = this.productsResource + '/categories/' + categoryId;

        return axios.get(url);
    }
}

export default gateway;

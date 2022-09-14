import Axios from 'axios';
const axios = Axios.create({
  baseURL: 'https://bradsapphome.com/app/api/',
  headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
});
const authorizedHeaders = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  Authorization: '',
};

const login = payload => {
  const request = `/login`;
  return axios
    .post(request, payload)
    .then(({data, status}) => {
      return status === 200 || status === 201 ? data : null;
    })
    .catch(e => {
      console.log('in login', e);
    });
};
const storeList = payload => {
  const request = `/view-store`;
  authorizedHeaders.Authorization = `Bearer ${payload.Auth}`;
  return axios
    .get(request, {headers: authorizedHeaders})
    .then(({data, status}) => {
      return status == 200 || status === 201 ? data : null;
    })
    .catch(e => {
      console.log('in storeList', e);
    });
};
const productList = payload => {
  const request = `/view-product`;
  authorizedHeaders.Authorization = `Bearer ${payload.Auth}`;
  return axios
    .get(request, {headers: authorizedHeaders})
    .then(({data, status}) => {
      return status == 200 || status === 201 ? data : null;
    })
    .catch(e => {
      console.log('in productList', e);
    });
};
const placeOrder = (payload, data1) => {
  console.log('res check', JSON.stringify(data1));
  // console.log(payload);
  const request = `/create-order`;
  return axios
    .post(request, data1, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${payload.Auth}`,
      },
    })
    .then(({data, status}) => {
      return status === 200 || status === 201 ? data : null;
    })
    .catch(e => {
      console.log('in place order error', e.response.data.message);
    });
};
const updateOrder = (payload, data1) => {
  console.log('res check', JSON.stringify(data1));
  // console.log(payload);
  const request = `/update-order`;
  return axios
    .post(request, data1, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${payload.Auth}`,
      },
    })
    .then(({data, status}) => {
      return status === 200 || status === 201 ? data : null;
    })
    .catch(e => {
      console.log('in update order error', e.message);
    });
};
const pastOrders = payload => {
  const request = `/view-order-list`;
  authorizedHeaders.Authorization = `Bearer ${payload.Auth}`;
  return axios
    .get(request, {headers: authorizedHeaders})
    .then(({data, status}) => {
      return status === 200 || status === 201 ? data : null;
    })
    .catch(e => {
      console.log('in plastordr', e);
    });
};
const details = payload => {
  const request = `/view-order-detail/${payload.id}`;
  authorizedHeaders.Authorization = `Bearer ${payload.Auth}`;
  return axios
    .get(request, {headers: authorizedHeaders})
    .then(({data, status}) => {
      return status === 200 || status === 201 ? data : null;
    })
    .catch(e => {
      console.log('in details', e);
    });
};
export {
  login,
  storeList,
  updateOrder,
  productList,
  details,
  pastOrders,
  placeOrder,
};

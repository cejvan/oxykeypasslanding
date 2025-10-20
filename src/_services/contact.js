import axios from 'axios';
import { domain } from './domain'
import { Company } from '../oxyConfig'

export const createForm = (data) => {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    data: {
      ...data,
      title: data.message || 'İletişim Formu',
      company: Company._id
    }
  }
  return axios(`${domain}/form`, requestOptions)
    .then(response => {
      if (response.data.code) {
        return response
      }
      throw new Error('Bağlantı hatası!');
    })
    .catch(error => { return error })
}

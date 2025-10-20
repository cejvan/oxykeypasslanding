import { domain } from '@/_services/domain'
import { Company } from '../oxyConfig';

const path = "/company-category"
const company = Company._id

export const getMainCategories = async (data) => {
    const extendetData = {
        ...data,
        company,
    }
    const options = {
        mode: 'cors',
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(extendetData),
    };
    const res = await fetch(domain + path + "/getwithlang", options)
    return res.json()
}

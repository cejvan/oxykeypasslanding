import { domain } from '@/_services/domain'
import { Company } from '../oxyConfig';

const path = "/banner"
const company = Company._id

export const getMainBanners = async (data) => {
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
    const res = await fetch(domain + path + "/get", options)
    return res.json()
}

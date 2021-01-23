import axios from 'axios'

export const getCards = async (keywords) => {
    const result = await axios.get('http://localhost:3030/api/cards', {
        params: {
            limit: 20,
            type: keywords,
            name: keywords
        },
    })
    return result ? result.data.cards : []
}
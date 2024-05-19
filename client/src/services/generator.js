import axios from 'axios';


// service for generating a plot
export const generatePlot = async (plotData) => {
    try {
        const response = await axios.post('http://localhost:5050/api/create', plotData)

        return response.data
    } catch (error) {
        console.log('ERROR POSTING TO API: ', error)
    }
}
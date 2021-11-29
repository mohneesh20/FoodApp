import axios from 'axios';
export default axios.create({
    baseURL:"https://api.yelp.com/v3/businesses",
    headers:{
        Authorization:"Bearer rxwVsxvfzj9IyDOkOD5i8fBek5FP9Fsxjq4KNAtPa0OIWY4F68b3n6zuoSR5R4f8Bj53q7l8vAVKjX0zfRl3S1uG2JYowMCsq8UIzY3-g0PO-Q7vbwWQ6Unng_XlYHYx"
    }
});
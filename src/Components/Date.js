let currentDate = new Date(props.current.dt * 1000);
let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
let day = currentDate.getDate();
let month = months[currentDate.getMonth()];
let hour = "0" + currentDate.getHours();
let minutes = "0" + currentDate.getMinutes();
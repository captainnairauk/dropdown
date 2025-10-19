import "./style.css";
import Dropdown from "./Dropdown";

const countryOptions = [
    {label: 'USA', value: 'us'},
    {label: "Canada", value: "ca"},
    {label: "Mexico", value: "mx"},    
];

const cityOptions = [
    {label: "New York", value: "ny"},
    {label: "London", value: "ldn"},
    {label: "Paris", value: "prs"},
];

new Dropdown('countryDropdown', countryOptions, (value, label) =>{
    console.log(`Selected country: ${label} (${value})`);
}, "hover");

new Dropdown('cityDropdown', cityOptions, (value, label) =>{
    console.log(`Selected city: ${label} (${value})`);
}, "hover");

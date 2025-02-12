// Import and export the Department, Employee, Schedule, Shift, StoreHours, and User models

const Role = require('./Role');
const Department = require('./Department');
const Employee = require('./Employee');
const Schedule = require('./Schedule');
// const Shift = require('./Shift');
const StoreHours = require('./StoreHours');
const User = require('./User');
// const TimeSlot = require('./TimeSlot');

module.exports = { Department, Employee, Schedule, StoreHours, User, Role };

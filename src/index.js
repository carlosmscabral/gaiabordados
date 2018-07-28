
import './index.css'; // Webpack will serialize CSS in JS - if this makes sense.
import {getUsers} from './api/userApi';
import $ from 'jquery';

getUsers().then(result => {
  let usersBody = "";

  result.forEach(user => {
    usersBody+= `<tr>
    <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
    <td>${user.id}</td>
    <td>${user.firstName}</td>
    <td>${user.lastName}</td>
    <td>${user.email}</td>
    </tr>`
  });

  $('#users').html(usersBody); //jQuery call.

});

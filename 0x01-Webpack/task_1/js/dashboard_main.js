import $ from 'jquery';
import * as _ from 'lodash';

$("body").append(
  "<p>Holberton Dashboard</p>",
  "<p>Dashboard data for the students</p>",
  "<button>Click here to get started</button>",
  "<p id='count'></p>",
  "<p>Copyright - Holberton School</p>"
);

function updateCounter() {
  this.count = (this.count || 0) + 1;
  $("#count").html(`${this.count} clicks on the button`);
}

$("button").click(() => _.debounce(updateCounter));

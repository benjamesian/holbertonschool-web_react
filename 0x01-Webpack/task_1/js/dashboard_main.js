import $ from 'jquery';
import debounce from 'lodash/debounce';

$("body").append(
  "<p>Holberton Dashboard</p>",
  "<p>Dashboard data for the students</p>",
  "<button>Click here to get started</button>",
  "<p id='count'></p>",
  "<p>Copyright - Holberton School</p>"
);

let count = 0;

function updateCounter() {
  count += 1;
  $("#count").html(`${count} clicks on the button`);
}

$("button").click(debounce(() => updateCounter()));

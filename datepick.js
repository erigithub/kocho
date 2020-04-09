var numberOfMonths;
if (window.matchMedia && window.matchMedia('(max-device-width: 640px)').matches) {
  // smartphone
  numberOfMonths = 1;
} else {
  // pc
  numberOfMonths = 2;
}

$("#datepicker").datepicker({
  numberOfMonths: numberOfMonths
});

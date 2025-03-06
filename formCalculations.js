function calculatePrice() {

  //Get selected data  
  var mainForm = document.forms.MainForm

  var numPeopleID = document.getElementById("numPeople");
  var numMemory = numPeopleID.options[numPeopleID.selectedIndex].value;

  var packageTypeID = document.getElementById("packageType");
  var packageMemory = packageTypeID.options[packageTypeID.selectedIndex].value;

  var airlineTraveID = document.getElementById("airlineTravel");
  var airlineTravelMemory = mainForm.querySelector('input[name=airLine]:checked').value;

  var appliesAllTotal = 0
  var appliesSingleTotal = 0
  var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')

  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].name == "appliesAll")
      //appliesAllTotal.push(parseInt(checkboxes[i].value))
      appliesAllTotal += parseInt(checkboxes[i].value)
    else if (checkboxes[i].name == "appliesSingle") {
      appliesSingleTotal += parseInt(checkboxes[i].value)
    }
  }




  //alert(appliesAllTotal)

  //console.log(airlineTravelMemory)

  //convert data to integers
  //memory = parseInt(memory);
  //hdd = parseInt(hdd);
  //network = parseInt(network);

  //calculate total value  
  var total = ((parseInt(packageMemory) + appliesAllTotal) * numMemory) + parseInt(airlineTravelMemory) + appliesSingleTotal;
  //alert(total)

  //print value to  PicExtPrice 
  document.getElementById("PicExtPrice").value=total + "$";

}
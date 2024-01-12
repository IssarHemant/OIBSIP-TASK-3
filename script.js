const calculateTemp = () => {
    const numberTemp = document.getElementById("temp").value;
    const tempSelected = document.getElementById("temp_diff");
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;
    const celtofar = (cel) => {
      let fahrenheit = Math.round((cel * 9) / 5 + 32);
      return fahrenheit;
    };
    const fartocel = (farh) => {
      let celsius = Math.round(((farh - 32) * 5) / 9);
      return celsius;
    };
    let result;
    if (valueTemp == "cel") {
      result = celtofar(numberTemp);
      document.getElementById(
        "resultContainer"
      ).innerHTML = ` ${result} degree Fahrenheit`;
    } else {
      result = fartocel(numberTemp);
      document.getElementById(
        "resultContainer"
      ).innerHTML = ` ${result} degree Celsius`;
    }
  };
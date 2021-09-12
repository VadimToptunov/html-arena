function getData(value) {
    try {
        if (value !== '') {
            getJSONData(value);
        } else {
            alert('Sorry, no value has been inserted!')
        }
    } catch (error) {
        alert(error);
    }
}

function generate_table(dataList) {
    var dataTable = document.getElementById("tblId");
    var tblBody = document.createElement("tbody");

        var row = document.createElement("tr");
        for (var i in dataList){
            var cell = document.createElement("td");
            var cell1 = document.createTextNode(dataList[i]);
            cell.appendChild(cell1);
            row.appendChild(cell);
        }
        tblBody.appendChild(row);

    dataTable.appendChild(tblBody);
}

function getJSONData(value) {
    url = "https://api.agify.io/?name=" + value;

    var settings = {
        "url": url,
        "method": "GET",
        "timeout": 0,
      };

      var data = [];
      
      $.ajax(settings).done(function (response) {
          data = Object.values(response);
          console.log(data);
          generate_table(data);         
      });
}
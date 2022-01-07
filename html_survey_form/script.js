document.getElementById("myTable").style.border = "1px solid black";
document.getElementById("myTable").style.borderCollapse = "collapse";




function addrecords(){


    let foodCount = document.querySelectorAll('input[type="checkbox"]:checked').length;

    if(foodCount < 2){
        alert("Please select atleast two food choices")
        return false;
    }



    let fname = document.getElementById("first-name").value;
    let lname = document.getElementById("last-name").value;
    let address = document.getElementById("address").value;
    let pincode = document.getElementById("pincode").value;
    let gender = document.querySelector("#gender:checked").value;
    let food = document.querySelectorAll('#food:checked');
    let food_list=[];

    for(i=0; i<food.length; i++){
        food_list.push(food[i].value)
    }
    food_list = food_list.join(", ");


    let country = document.getElementById("country-select").value;
    let state = document.getElementById("state-select").value;


    let table = document.getElementById("myTable");
    let row = table.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);
    let cell7 = row.insertCell(6);
    let cell8 = row.insertCell(7);

    cell1.innerHTML = fname;
    cell2.innerHTML = lname;
    cell3.innerHTML = address;
    cell4.innerHTML = pincode;
    cell5.innerHTML = gender;
    cell6.innerHTML = food_list;
    cell7.innerHTML = country;
    cell8.innerHTML = state;


    

    var form = document.getElementById("form");
    form.reset();

}
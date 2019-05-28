function App() {
    this.array = ["nokia", "iphone", "samsung"];
    this.display = function () {
        let html = "<tr class ='bolld'><td>STT</td><td>IPHONE</td><td>EDIT</td><td>DELETE</td></tr>";
        for (let i = 0; i < this.array.length; i++) {
            html += "<tr><td>" + eval(i + 1) + "</td>";
            html += "<td>" + this.array[i] + "</td>";
            html += "<td><button onclick='edit(this.value)' value='" + this.array[i] + "'>edit</button></td>";
            html += "<td><button onclick='Delete(this.value)' value='" + i + "'>Delete</button></td></tr>";
        }
        document.getElementById("output").innerHTML = html;
    };
    this.edit = function (value) {
        for (let i = 0; i < this.array.length; i++) {
            if (this.array[i] == value) {
                let edit = prompt();
                this.array[i] = edit;
            }
        }
        this.display();
    };
    this.delete = function (value) {
        this.array.splice(value, 1);
        this.display();
    };
    this.add = function (value) {
        this.array.push(value);
        console.log(this.array);
        this.display();
    };
}

let app = new App();
app.display();


function Delete(value) {
    app.delete(value);
}

function edit(value) {
    app.edit(value);
}

function Add() {
    let item = document.getElementById("input").value;
    if (item !== "") {
        app.add(item);
    }
    document.getElementById("input").value = "";
}
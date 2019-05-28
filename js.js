function App() {
    this.array = ["nokia", "iphone", "samsung"];
    this.display = function () {
        let print = "";
        for (let i = 0; i < this.array.length; i++) {
            print += "<tr><td>" + i + "</td>";
            print += "<td>" + this.array[i] + "</td>";
            print += "<td><button onclick='edit(this.value)' value='" + this.array[i] + "'>edit</button></td>";
            print += "<td><button onclick='Delete(this.value)' value='" + i + "'>Delete</button></td></tr>";
        }
        document.getElementById("output").innerHTML = print;
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
    document.getElementById("input").value="";
}
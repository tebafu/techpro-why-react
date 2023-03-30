const data = {
    Name: "Techpro",
    Age: 30,
    City: "Thessaloniki",
    location: "Ymca",
};

let column_field_template = `<div class="field">
    <div class="field-content">
        <div class="field-name">
            {{ name }}
        </div>
        <div id="{{name}}" class="field-value">
            {{ value }}
        </div>
    </div>
</div>`;

const column = document.getElementById("column");

function populateColumn(column, column_data) {
    for (const key in column_data) {
        let field = column_field_template;

        field = field.replace("{{ name }}", key);
        field = field.replace("{{ value }}", column_data[key]);

        column.innerHTML += field;
    }
}

populateColumn(column, data);

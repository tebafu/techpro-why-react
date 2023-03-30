const data = {
    name: "Techpro",
    age: 30,
    city: "Thessaloniki",
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
let hb_column_field = Handlebars.compile(column_field_template);

const column = document.getElementById("column");

function populateColumn(column, column_data) {
    for (const key in column_data) {
        column.innerHTML += hb_column_field({
            name: key,
            value: column_data[key],
        });
    }
}

populateColumn(column, data);

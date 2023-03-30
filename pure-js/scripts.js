const data = {
    name: "Techpro",
    age: 30,
    city: "Thessaloniki",
    location: "Ymca",
};

const column = document.getElementById("column");

column.innerHTML += `<div class="field">
    <div class="field-content">
        <div class="field-name">${Object.keys(data)[0]}</div>
        <div id="${data.name}" class="field-value">
            ${data.name}
        </div>
    </div>
</div>`;

column.innerHTML += `<div class="field">
    <div class="field-content">
        <div class="field-name">${Object.keys(data)[1]}</div>
        <div id="${data.age}" class="field-value">
            ${data.age}
        </div>
    </div>
</div>`;

column.innerHTML += `<div class="field">
    <div class="field-content">
        <div class="field-name">${Object.keys(data)[2]}</div>
        <div id="${data.city}" class="field-value">
            ${data.city}
        </div>
    </div>
</div>`;

column.innerHTML += `<div class="field">
    <div class="field-content">
        <div class="field-name">${Object.keys(data)[3]}</div>
        <div id="${data.location}" class="field-value">
            ${data.location}
        </div>
    </div>
</div>`;

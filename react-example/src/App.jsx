import "./styles.css";
import ColumnHeader from "./ColumnHeader";
import ColumnField from "./ColumnField";

const data = {
    name: "Techpro",
    age: 30,
    city: "Thessaloniki",
    location: "Ymca",
};

function App() {
    const fieldsRender = Object.keys(data).map((key) => {
        return <ColumnField key={key} label={key} value={data[key]} />;
    });

    return (
        <div className="grid-column">
            <ColumnHeader />
            {fieldsRender}
        </div>
    );
}

export default App;

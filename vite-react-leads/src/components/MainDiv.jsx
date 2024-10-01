import React from "react";
import Form from "./Form";
import "./MainDiv.css";
import TableLeads from "./TableLeads";

class Main extends React.Component {
    render() {
        return (
            <main>
                <Form />
                <TableLeads leads={this.props.leads} />
            </main>
        )
    }
}

export default Main;
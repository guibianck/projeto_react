import React from "react";
import Form from "./Form";
import "./MainDiv.css";
import TableLeads from "./TableLeads";

class Main extends React.Component {
    constructor(props) {
        super(props);
        let leads = props.leads;
        this.state = {
            leads
        }
    }
    render() {
        return (
            <main>
                <Form />
                <TableLeads leads={this.state.leads} />
            </main>
        )
    }
}

export default Main;
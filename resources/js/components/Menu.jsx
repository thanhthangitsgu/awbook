import { isNull } from "lodash";
import React from "react";
class Menu extends React.Component {
    render() {
        const list = this.props.list;
        const listCode = list.map((item, index) => (
            <a href="#" key={index}>
                <div className="menu-item"> {item} </div>
            </a>
        ));

        return (
            <>
                <div className="menu-option">
                    <span>{this.props.name}</span>
                </div>

                {!(list === null) && (
                    <>
                        <div className="menu-list">{listCode}</div>
                    </>
                )}
            </>
        );
    }
}
export default Menu;

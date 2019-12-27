import React, {Component} from "react";
import "./Pallet.css";


class Pallet extends Component {

    render() {
        const { colors } = this.props;

    
        return ( 
           
            colors.map(
                (color) => (
                
                   
                <div className="colorBox" style={{ background: color.color }} >
                     
                </div>

                )
            )
         
        );

    }


}

export default Pallet;
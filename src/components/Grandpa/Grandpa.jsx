import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import Aunty from "../Aunty/Aunty";
import './Grandpa.css'
const Grandpa = () => {
    return (
       <div className="grandpa">
        <h2>Grandpa</h2>
           <div className="grandpa flex">
            <Dad></Dad>
            <Uncle> </Uncle>
            <Aunty></Aunty>
           </div>
       </div>
        
    );
};

export default Grandpa;
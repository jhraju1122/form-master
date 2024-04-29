import SpecialPerson from "../SpecialPerson/SpecialPerson";

 

const Cousin = () => {
    const Cousin = ({name, asset})
    return (
        <div>
            <h2>Cousin</h2>
            <p>{name}</p>
            <section>
{  asset &&      <SpecialPerson asset={asset}></SpecialPerson>
}            </section>
        </div>
    );
};

export default Cousin;
import Car from "./Car";

interface MasinaProps {
    car:{
        name: string;
        model: string;
    }
}

export default function Masina(props:MasinaProps) {
    const cars = [
        {id:1, brand:'ford' },
        {id:2, brand:'audi'},
        {id:3, brand:'bmw' },

    ];
  return (
    <>
    <div> Masina primita noua este {props.car.name} modelul {props.car.model}</div>
    <div>Masina</div>
    <ul>
        {cars.map((car) => <Car id={car.id} brand={car.brand}/>)}
    </ul>
    </>
  )
}

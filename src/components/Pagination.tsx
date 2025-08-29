import { Button } from "./Button"
import leftSvg from "../assets/left.svg"
import rightSvg from "../assets/right.svg"


type Props = {
    current: number,
    total: number
    onNext:()=> void,
    onPrevious:()=>void
}

export function Pagination({ current, total, onNext, onPrevious }: Props) {


    return (
        <div className="flex flex-1 justify-center items-center gap-2">
            <Button disabled={current===1} variant="iconSmall" onClick={onPrevious} >
                <img src={leftSvg} alt="ícone de voltar" />
            </Button>
            <span className="tex-sm text-gray-200">{current} / {total}</span>
            <Button variant="iconSmall" onClick={onNext}  disabled={current===10}>
                <img src={rightSvg} alt="ícone de avançar" />
            </Button>
        </div>
    )
}
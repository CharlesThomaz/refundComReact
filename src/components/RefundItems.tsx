import { data } from "react-router"

export type RefundItemProps = {
    id: string,
    name: string,
    category: string,
    amount: string,
    categoryImg: string
}

type Props = React.ComponentProps<"a"> & {
    data: RefundItemProps
}

export function RefundItems({ data, ...rest }: Props) {


    return (

        <a {...rest} className="flex items-center gap-3 hover:bg-gray-100/5 cursor-pointer rounded-md p-2">
            <img src={data.categoryImg} alt="ícone da categoria" className="w-8 h-8"/>

            <div className="flex flex-col flex-1">
                <strong className=" text-sm text-gray-100">{data.name}</strong>
                <span className="text-xs text-gray-200">{data.category}</span>
            </div>
            <span className="text-sm text-gray-100 font-semibold">
                <small className="font-normal text-gray-200">R$</small>
                {data.amount}
            </span>
        </a>

    )
}

import { classMerge } from "../utils/classMerge";

type Props = React.ComponentProps<"button"> & {
    isLoading?: boolean;
    variant?: "base" | "icon" | "iconSmall"
}
const variants = {
    buttton: {
        base: "h-12",
        icon: "h-12 w-12",
        iconSmall: "h-8 w-8"

    }
}

export function Button({ children,className, isLoading, type = "button", variant = "base", ...rest }: Props) {

    return (
        <button type={type} {...rest} disabled={isLoading || rest.disabled} className={classMerge(["flex items-center justify-center bg-green-100 rounded-lg text-white cursor-pointer enabled:hover:bg-green-200 transition ease-linear disabled:opacity-50 ", variants.buttton[variant],className, isLoading &&"cursor-progress"])}>
            {children}
        </button>

    )

}
import { styled } from "../../stitches.config";

export const Input = styled('input', {
    width: "100%",
    height: "2.5rem",
    fontSize: "$1",
    color: "$label",
    border: "1px solid $green4",
    paddingX: "2.5em",
    paddingY: "$2",
    outline: "none",
    transition: "$1",
    borderRadius: "$2",

    '&:focus': {
        border: "1px solid $green10"
    },
})
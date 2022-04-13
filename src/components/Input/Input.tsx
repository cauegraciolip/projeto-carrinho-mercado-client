import { styled } from "../stitches.config";

export const Input = styled('input', {
    width: "100%",
    height: 35,
    fontSize: "$1",
    color: "$label",
    border: "1px solid $green4",
    paddingX: "4%",
    paddingY: "$2",
    outline: "none",
    transition: "$1",
    borderRadius: "$2",

    '&:focus': {
        border: "1px solid $green10"
    },
})
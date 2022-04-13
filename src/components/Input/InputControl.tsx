import { styled } from "../../stitches.config";

export const InputControl = styled('div', {
    display: "flex",
    alignItems: "center",

    "& svg": {
        fontSize: "$2",
        position: "absolute",
        color: "$label",
        paddingLeft: "1%",
        zIndex: 1,

    },

    "& input": {
        position: "relative",
    }
})
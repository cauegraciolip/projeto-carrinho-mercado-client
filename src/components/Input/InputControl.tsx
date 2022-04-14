import { styled } from "../../stitches.config";

export const InputControl = styled('div', {
    display: "flex",
    alignItems: "center",
    width: "100%",

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